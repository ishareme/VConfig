export default {
    $(ele){
        if(document.querySelector){
            return document.querySelector(ele);
        } else {
            if (ele.indexOf('#') > -1){
                return document.getElementById(ele.replace('#',''));
            } else if (ele.indexOf('.') > -1){
                return document.getElementsByClassName(ele.replace('.',''));
            } else {
                return document.getElementsByTagName(ele);
            }
        }
    },
    extend(){
        let options, name, clone, copy, source, copyIsArray,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[i] || {};
            i++;
        }

        if (typeof target !== 'object' && type(target) !== 'function') {
            target = {};
        }

        if (i === length) {
            target = this;
            i--;
        }

        for (; i < length; i++) {
            //
            if ((options = arguments[i]) !== null) {
                // for in source object
                for (name in options) {

                    source = target[name];
                    copy = options[name];

                    if (target == copy) {
                        continue;
                    }

                    // deep clone
                    if (deep && copy && (isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                        // if copy is array
                        if (copyIsArray) {
                            copyIsArray = false;
                            // if is not array, set it to array
                            clone = source && Array.isArray(source) ? source : [];
                        } else {
                            // if copy is not a object, set it to object
                            clone = source && isPlainObject(source) ? source : {};
                        }

                        target[name] = this.extend(deep, clone, copy);
                    } else if (copy !== undefined) {
                        target[name] = copy;
                    }
                }
            }
        }

        return target;
    },

    drag(ele){
        let oW,oH;
        this.$(ele).addEventListener('touchstart', function (event) {
            oW = event.touches[0].clientX - this.offsetLeft;
            oH = event.touches[0].clientY - this.offsetTop;
            document.addEventListener('touchmove',(event) =>{
                event.preventDefault();
            },{
                passive: false,
            });
        });

        let offsetW, offsetH;
        this.$(ele).addEventListener('touchmove', function (event) {
            offsetW = event.touches[0].clientX - oW;
            offsetH = event.touches[0].clientY - oH;
            if(offsetW < 0) {
                offsetW = 0;
            }else if(offsetW > document.documentElement.clientWidth - this.offsetWidth) {
                offsetW = (document.documentElement.clientWidth - this.offsetWidth);
            }
            if(offsetH < 0){
                offsetH = 0;
            }else if(offsetH > document.documentElement.clientHeight - this.offsetHeight){
                offsetH = (document.documentElement.clientHeight - this.offsetHeight);
            }
            this.style.left = `${offsetW}px`;
            this.style.top = `${offsetH}px`;
        });

        this.$(ele).addEventListener('touchend',function() {
            document.removeEventListener('touchend',(event) =>{
                event.preventDefault();
            }, {
                passive: false,
            });
        });
    },

    hasClass(ele, cls){
        return !!this.$(ele).className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass(ele,cls){
        if(!this.hasClass(ele, cls)) this.$(ele).className += ' ' + cls;
    },
    removeClass(ele,cls){
        if(this.hasClass(ele, cls)) this.$(ele).className = this.$(ele).className.replace( new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ');
    },

};

function type(object) {
    let class2type = {},
        type = class2type.toString.call(object),
        typeString = 'Boolean Number String Function Array Date RegExp Object Error Symbol';

    if (object == null) {
        return object + '';
    }

    typeString.split(' ').forEach((type) => {
        class2type[`[object ${type}]`] = type.toLowerCase();
    });

    return (
        typeof object === 'object' ||
        typeof object === 'function' ?
            class2type[type] || 'object' :
            typeof object
    );
}

function isPlainObject(object) {
    let proto,
        ctor,
        class2type = {},
        toString = class2type.toString,
        hasOwn = class2type.hasOwnProperty,
        fnToString = hasOwn.toString,
        ObjectFunctionString = fnToString.call(Object);

    if (!object || toString.call(object) !== '[object Object]') return false;

    proto = Object.getPrototypeOf(object);

    if (!proto) return true;

    ctor = hasOwn.call(proto, 'constructor') && proto.constructor;

    return typeof ctor === 'function' && fnToString.call(ctor) === ObjectFunctionString;
}