(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css) { return }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = "*{\n    padding: 0;\n    margin: 0;\n    border: 0;\n}\nhtml,body{\n    width: 100%;\n    height: 100%;\n}\n.MConfig{\n    width: 3rem;\n    height: 1.2rem;\n    border-radius: 10px;\n    background-color: #8b7930;\n    font-size: .5rem;\n    line-height: 1.2rem;\n    text-align: center;\n    color: #FFF;\n    position: absolute;\n    left: .2rem;\n    bottom: .2rem;\n    z-index: 99;\n}\n.MConfig-wrap{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n.MConfig-dialog-wrap{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 9;\n    display: none;\n}\n.MConfig-dialog{\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0,.6);\n}\n.MConfig-dialog .main{\n    width: 12rem;\n    height: 15rem;\n    box-sizing: border-box;\n    background-color: #FFF;\n    border-radius: 10px;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    z-index: 999;\n    padding: 0 10px;\n    font-size: .8rem;\n    color: #d4237a;\n}\n.MConfig-dialog .main .head{\n    width: 100%;\n    height: 1.5rem;\n    border-bottom: 1px solid #d4237a;\n    line-height: 1.5rem;\n    text-align: center;\n}\n.MConfig-dialog .main .body{\n    width: 100%;\n    height: 12.5rem;\n    font-size: .6rem;\n    overflow-y: scroll;\n}\n.MConfig-dialog .main .body .item{\n    width: 100%;\n    height: 2rem;\n    line-height: 2rem;\n    overflow: hidden;\n    border-bottom: 1px dotted #d4237a;\n}\n.MConfig-dialog .main .body .item .left{\n    width: 35%;\n    height: 100%;\n    float: left;\n    overflow:hidden;\n    white-space:nowrap;\n    text-overflow:ellipsis;\n    vertical-align: middle;\n    font-weight: bold;\n}\n.MConfig-dialog .main .body .item .right{\n    width: 65%;\n    height: 100%;\n    line-height: 2rem;\n    float: right;\n    text-align: right;\n    overflow: hidden;\n    position: relative;\n}\n.MConfig-dialog .main .body .item .right input {\n    -webkit-appearance: none;\n    outline: none;\n    border: 1px solid #d4237a;\n    padding: 3px 40px 3px 5px;\n    width: 90%;\n    /*height: .95rem;*/\n    /*line-height: .95rem;*/\n    border-radius: 5px;\n    box-sizing: border-box;\n}\n.MConfig-dialog .main .body .item .right .confirm-btn{\n    width: 20%;\n    height: .95rem;\n    line-height: .95rem;\n    text-align: center;\n    font-size: .3rem;\n    color: #FFF;\n    background-color: #d4237a;\n    position: absolute;\n    top: 50%;\n    right: 0;\n    transform: translateY(-50%);\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    box-shadow: 0 0 5px #d4237a;\n    box-sizing: border-box;\n}\n.MConfig-dialog .main .body .item .right .bool{\n    width: 32px;\n    height: 32px;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXUlEQVRYR+1WQU4bQRCsmkXKJVKcF7DgUwIWmxfEvAB4QeAHzg37Eudic4MfxLwAfsDmBRjZKCfD8oIYKTmA4qlodlnHOE6y2o2ED56TZU1PVXdXVy/xxIdPjI8FgUUF5rMCPX+/SmPeAQhABIUmRegC6Mra40p0EE6/9agCl34jkKdDgFVJtyRDJQ/kPiQCSVWSLwCFHPH9WtQavzkm4MCtwRkgGrK2Nmh1cqPOCLwsN3atdARQxmIzJRETSMEJ3XhW26+ig8j971phjHnrfouK1gft4yKkvvj7/sjwVOBySiIm0CvXQwjBklXgwK/9Zum7d3fiWjEJKGE4yT4PGUfih2GXxPn6oL3JWHCeOSOw58oeg5v7sz+J73+QcO0Q8Ekju8l+ud6RsF25apdcRv1y4xTA1t+ycyQqV62XeSqQxvRW60MSp+yv1rsgo/VBa/uBgLI87NjPGqssseNEhWX2yw1J+Fi5ajXTdmR5JI3JcnfWnd5qo0niwxwQmGhBov77r1myMtDO60Hb6SXXibUm+Q8i5FYqqmwi1O1z+8xfiZrDXOhu9FMRzhrDb+YuSqxz9ikqwEdj+MuIuLFk7RtnRLFZeOwQjF1wfIQbWbtbRP2JEZlzUBeVQbs6YcUKCV571u6kVuwsGl68TEqy6hYBdkkkVmxOBK0Yy6rbB1PLSKFbFqRqRX1/unnJMsJhvOwewN2d39ax9XTkSu/cDlRoxELr2FIBxCqJkqDPZsTazHU8yTgRJnfdggK5kVfpcZx0AaKrkTr//CApBJQzeD6/CXMmkytsUYFFBX4C8hxhBGY8emEAAAAASUVORK5CYII=\");\n    background-size: 100% auto;\n    float: right;\n    margin-top: .3rem;\n    margin-right: .3rem;\n}\n.MConfig-dialog .main .body .item .right .bool.active{\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACQklEQVRYR+1WS3YSURSsamyYKZl5jvLJRGGUdgXCCiQrEHeAKzCuINmBZAXiCkJWkM4IdBIEPcchwZH9pMvz2jS/oCF0zgkD3hDuvVWv7n23mrjnw3vGx5bAVoHNVKDz9EHFIV+L8AB6yV6KfAp+KB2Xv/1uL9aaU+DLE9cLHRyCrAC6hNgW4SchQMEDVQH4CFLbCfH22XczqTkhEIGncAKAEhrlgWkmAV7M7eTcOokjAHLGqMYkIgITcOGrjKmVf6CXBNyCOWTB1gjD8DSWvvMYRbpuC0QhJhER6OTcNglPgfGSgE9VZHbuAlI789Ps7w4xjEikXR/CWWlgqrQDR8c5kfQmiez/BJ8wkZ8ZmWpEImoHPygMq+zk3CaJWqlv5lnfsgfdvDuMBu1/R/hUGgQ1G2LjJbTYzbk+wF78xy1xo/BYxVVyS/0gans3l26BKrCbT0vA+3I/OFilwLKYTj59QODdKvlWdjuUcc4GELiDFnzOpWpi6uMqCmRGwY4dxKgFUDEewlelvtlZpcCymIsssr8eur21hvCunuHNKugyMzLFa89wZhHtKTAvkiwiexk4TpNAtAXjI+kUxtRt7atFdCbhvDwwldlVbJ3qQoHZT0Ji+izpSRimQvjx3r8Ct7Oy64xRsb8vmpElIQKN531zvO5MLH2qf83o0JpdDG7jrtnx2MERyZeAhtaOmdCONbXjrG1FKkRjqR3Pso56SdYJ6+XcS6SEdC7Ah9S88YMkEdCayZv5TbjmZdZK2yqwVeAPdRw+Wjsm32QAAAAASUVORK5CYII=\");\n    background-size: 100% auto;\n}\n.MConfig-dialog .main .foot{\n    width: 100%;\n    height: 1rem;\n    line-height: 1rem;\n    text-align: center;\n    font-size: .4rem;\n    border-top: 1px solid #d4237a;\n}\n.MConfig-dialog .close-icon{\n    position: absolute;\n    right: -10px;\n    top: -10px;\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n    background-color: #FFF;\n    background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACdklEQVRYR8WXX07bQBDGv9kgeACp3KAOeUIYFW4AJyg3SDhByxvkBfPi8FY4QcMNcgPoCQgiqE9xfIQgtQ+gZgdtHLt2vOs/iaX4yZJnZ347OzPfmrDih1YcHwsDPFvnR2sgDjew63d+LbKZwgC/rXNLCtFk4ASEA20wRp+AnpDybte/9osA5QKMLGf7r3j/AUKriMPIhvlmU25c1X1nnLUuE+DFah9IgXsibJcKPjNmxlhIHO/5bt+03gjw0mi3GPi5SOD5NQSc7g3drs6XFkDtnGt4rCJ46IMmONRlIgWgzvyPeB8tmnYTtDqOLblen6+JFMCgcdEFqFnl7v8XJm5tz/0e950AUK02qYlRVnBmfiWiTzqbrG+hfW0i6/EWTQA877QdIlwaAZjPbK9zE3QHPyRB+M4edlqztu2D8FkPiat9z3Wi2ogbDXYu+iD6YmyZWCElIYLg4bpBo90D8NU0rGzPPdQDNNrRaDUs7tqeexp+m3aLQCt+rkVmhz10o8xHL2q2U03c5xYfIwERty8SXNnzRB7v+9cP6r08wNRDGqJo8GoAkDxz5VRfmPp8LpmBdPB4TaS7Iw2hBVBmg7winNt5UITctL3OWRkIbRFOAUq34Uwp52oiuw35yfY60X1iiUE0J9MziGAQvT2CyCo9iIqNYoxNQqUEJ0/EMkdxUAcrFCMFEMjxm28SnNxBZTBQQrUlN6xcOQ57emUXkqidVnklK9PTWUei0i4kHS10KQ0dz/TdAeFbqfNn3G7KdWepa3k8oGrRf0K0CHxivDMwPzGotyZlt7IfE9OulXzHv4XyWipLcTkuu7Aq+9xfs6oCmfx8ADCEYDCxZundAAAAAElFTkSuQmCC\");\n    background-size: 100% auto;\n}\n.MConfig-toast-wrap{\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    top: 0;\n    display: none;\n}\n.MConfig-toast{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9999;\n    min-width: 4rem;\n    min-height: 1rem;\n    line-height: 1rem;\n    padding: 5px 20px;\n    text-align: center;\n    font-size: .4rem;\n    color: #FFF;\n    border-radius: 20px;\n    background-color: #d4237a;\n    box-shadow: 0 0 30px #ccc;\n    word-break: break-all;\n    word-wrap: break-word;\n}";
__$$styleInject(css);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var utils = {
    $: function $(ele) {
        if (document.querySelector) {
            return document.querySelector(ele);
        } else {
            if (ele.indexOf('#') > -1) {
                return document.getElementById(ele.replace('#', ''));
            } else if (ele.indexOf('.') > -1) {
                return document.getElementsByClassName(ele.replace('.', ''));
            } else {
                return document.getElementsByTagName(ele);
            }
        }
    },
    extend: function extend() {
        var options = void 0,
            name = void 0,
            clone = void 0,
            copy = void 0,
            source = void 0,
            copyIsArray = void 0,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if (typeof target === 'boolean') {
            deep = target;
            target = arguments[i] || {};
            i++;
        }

        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object' && type(target) !== 'function') {
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
    drag: function drag(ele) {
        var oW = void 0,
            oH = void 0;
        this.$(ele).addEventListener('touchstart', function (event) {
            oW = event.touches[0].clientX - this.offsetLeft;
            oH = event.touches[0].clientY - this.offsetTop;
            document.addEventListener('touchmove', function (event) {
                event.preventDefault();
            }, {
                passive: false
            });
        });

        var offsetW = void 0,
            offsetH = void 0;
        this.$(ele).addEventListener('touchmove', function (event) {
            offsetW = event.touches[0].clientX - oW;
            offsetH = event.touches[0].clientY - oH;
            if (offsetW < 0) {
                offsetW = 0;
            } else if (offsetW > document.documentElement.clientWidth - this.offsetWidth) {
                offsetW = document.documentElement.clientWidth - this.offsetWidth;
            }
            if (offsetH < 0) {
                offsetH = 0;
            } else if (offsetH > document.documentElement.clientHeight - this.offsetHeight) {
                offsetH = document.documentElement.clientHeight - this.offsetHeight;
            }
            this.style.left = offsetW + 'px';
            this.style.top = offsetH + 'px';
        });

        this.$(ele).addEventListener('touchend', function () {
            document.removeEventListener('touchend', function (event) {
                event.preventDefault();
            }, {
                passive: false
            });
        });
    },
    hasClass: function hasClass(ele, cls) {
        return !!this.$(ele).className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },
    addClass: function addClass(ele, cls) {
        if (!this.hasClass(ele, cls)) this.$(ele).className += ' ' + cls;
    },
    removeClass: function removeClass(ele, cls) {
        if (this.hasClass(ele, cls)) this.$(ele).className = this.$(ele).className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ');
    }
};

function type(object) {
    var class2type = {},
        type = class2type.toString.call(object),
        typeString = 'Boolean Number String Function Array Date RegExp Object Error Symbol';

    if (object == null) {
        return object + '';
    }

    typeString.split(' ').forEach(function (type) {
        class2type['[object ' + type + ']'] = type.toLowerCase();
    });

    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' || typeof object === 'function' ? class2type[type] || 'object' : typeof object === 'undefined' ? 'undefined' : _typeof(object);
}

function isPlainObject(object) {
    var proto = void 0,
        ctor = void 0,
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

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// import is from '@meitu/is';
function VConfig(options) {
    this.init(options);
}

VConfig.prototype = {
    init: function init(options) {
        if (!Array.isArray(options)) {
            var err = new Error('传入的参数必须为数组哦');
            console.log('VConfig.options', err.message);
            return err;
        }
        this.options = utils.extend(true, [{
            //必填
            target: null,
            //label
            label: '',
            type: {
                // bool input
                name: 'bool',
                replaceData: ''
            },
            toastSuccessTxt: '设置成功',
            toastErrorTxt: '设置失败',
            success: function success() {},
            error: function error() {}
        }], options);
        console.log(this.options);
        this.changeAble = true;
        this.MConfigHTML = '<div class="MConfig js-MConfig">VConfig</div>';
        this.MCDialogHTML = '<div class="MConfig-dialog js-MConfig-dialog">\n                            <div class="main">\n                                <div class="head">\n                                    VConfig\n                                </div>\n                                <div class="body js-body">\n                                    \n                                </div>\n                                <div class="foot">Thanks</div>\n                                <div class="close-icon js-close"></div>\n                            </div>\n                        </div>';
        this.MCItemHTML = '';
        this.MCToastHTML = '';

        this.renderMC().renderDialog().renderItem().renderToast(this.options[0].toastSuccessTxt);

        this.bind();
        console.log(this);
    },
    renderMC: function renderMC() {
        var MConfigDiv = document.createElement('div');
        MConfigDiv.className = 'MConfig-wrap';
        MConfigDiv.innerHTML = this.MConfigHTML;
        document.body.appendChild(MConfigDiv);
        return this;
    },
    renderDialog: function renderDialog() {
        var MCDialogDiv = document.createElement('div');
        MCDialogDiv.className = 'MConfig-dialog-wrap';
        MCDialogDiv.innerHTML = this.MCDialogHTML;
        document.body.appendChild(MCDialogDiv);
        return this;
    },
    renderItem: function renderItem() {
        var _this = this;

        this.options.map(function (item, index) {
            console.log('renderItem', item);
            _this.MCItemHTML += '<div class="item">\n                         <div class="left label">' + (item.label ? item.label : item.target) + '</div>\n                         <div class="right">\n                              ' + (item.type.name === 'input' ? '<input type="text" class="input js-input js-input-' + index + '"><div class="confirm-btn js-confirm-btn js-confirm-btn-' + index + '" data-index="' + index + '">\u786E\u5B9A</div>' : '<div class="bool js-bool js-bool-' + index + '" data-change="false" data-index="' + index + '"></div>') + '\n                         </div>\n                       </div>\n                      ';
        });
        utils.$('.js-MConfig-dialog .js-body').innerHTML = this.MCItemHTML;
        return this;
    },
    renderToast: function renderToast(content) {
        console.log(content);
        this.MCToastHTML = '<div class="MConfig-toast js-MConfig-toast">' + content + '</div>';
        var MCToastDiv = document.createElement('div');
        MCToastDiv.className = 'MConfig-toast-wrap';
        MCToastDiv.innerHTML = this.MCToastHTML;
        document.body.appendChild(MCToastDiv);
        return this;
    },
    bind: function bind() {
        var _this2 = this;

        utils.$('.js-MConfig').addEventListener('click', function () {
            _this2.show('.js-MConfig-dialog');
        });
        utils.$('.js-MConfig-dialog .js-close').addEventListener('click', function () {
            _this2.hide('.js-MConfig-dialog');
        });
        utils.$('.js-MConfig-dialog').addEventListener('click', function (event) {
            event.target.className === 'MConfig-dialog js-MConfig-dialog' && _this2.hide('.js-MConfig-dialog');
        });

        utils.drag('.js-MConfig');
    },
    config: function config(app) {
        var _this3 = this;

        if ((typeof app === 'undefined' ? 'undefined' : _typeof$1(app)) !== 'object') return false;
        Array.from(document.querySelectorAll('.js-bool')).map(function (item) {
            item.addEventListener('click', function (event) {
                _this3.doBool(event, app);
            });
        });

        Array.from(document.querySelectorAll('.js-confirm-btn')).map(function (item) {
            item.addEventListener('click', function (event) {
                _this3.doInput(event, app);
            });
        });
    },
    show: function show(ele) {
        utils.$(ele).parentNode.style.display = 'block';
    },
    hide: function hide(ele) {
        utils.$(ele).parentNode.style.display = 'none';
    },
    toast: function toast() {
        var _this4 = this;

        var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;

        var timer = null;
        utils.$('.js-MConfig-toast').innerText = content;
        this.show('.js-MConfig-toast');
        this.changeAble = false;
        clearTimeout(timer);
        timer = setTimeout(function () {
            _this4.hide('.js-MConfig-toast');
            _this4.changeAble = true;
        }, delay);
    },
    doInput: function doInput(event, app) {
        if (!this.changeAble) return false;
        var index = event.target.dataset.index;
        if (typeof app[this.options[index].target] !== 'undefined') {
            app[this.options[index].target] = !app[this.options[index].target];
        } else {
            this.toast('app\u6CA1\u6709' + this.options[index].target + '\u5C5E\u6027\u54E6~~');
            return false;
        }
        app[this.options[index].target] = event.target.parentNode.firstChild.nextSibling.value;
        this.options[index].success && this.options[index].success(app);
        this.options[index].toastSuccessTxt ? this.toast(this.options[index].toastSuccessTxt) : this.toast('设置成功');
    },
    doBool: function doBool(event, app) {
        if (!this.changeAble) return false;
        var index = event.target.dataset.index;
        if (typeof app[this.options[index].target] !== 'undefined') {
            app[this.options[index].target] = !app[this.options[index].target];
        } else {
            this.toast('app\u6CA1\u6709' + this.options[index].target + '\u5C5E\u6027\u54E6~~');
            return false;
        }
        this.options[index].success && this.options[index].success(app);
        this.options[index].toastSuccessTxt ? this.toast(this.options[index].toastSuccessTxt) : this.toast('设置成功');
        var bool = event.target.dataset.change;
        if (bool === 'false') {
            event.target.style.backgroundImage = 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACQklEQVRYR+1WS3YSURSsamyYKZl5jvLJRGGUdgXCCiQrEHeAKzCuINmBZAXiCkJWkM4IdBIEPcchwZH9pMvz2jS/oCF0zgkD3hDuvVWv7n23mrjnw3vGx5bAVoHNVKDz9EHFIV+L8AB6yV6KfAp+KB2Xv/1uL9aaU+DLE9cLHRyCrAC6hNgW4SchQMEDVQH4CFLbCfH22XczqTkhEIGncAKAEhrlgWkmAV7M7eTcOokjAHLGqMYkIgITcOGrjKmVf6CXBNyCOWTB1gjD8DSWvvMYRbpuC0QhJhER6OTcNglPgfGSgE9VZHbuAlI789Ps7w4xjEikXR/CWWlgqrQDR8c5kfQmiez/BJ8wkZ8ZmWpEImoHPygMq+zk3CaJWqlv5lnfsgfdvDuMBu1/R/hUGgQ1G2LjJbTYzbk+wF78xy1xo/BYxVVyS/0gans3l26BKrCbT0vA+3I/OFilwLKYTj59QODdKvlWdjuUcc4GELiDFnzOpWpi6uMqCmRGwY4dxKgFUDEewlelvtlZpcCymIsssr8eur21hvCunuHNKugyMzLFa89wZhHtKTAvkiwiexk4TpNAtAXjI+kUxtRt7atFdCbhvDwwldlVbJ3qQoHZT0Ji+izpSRimQvjx3r8Ct7Oy64xRsb8vmpElIQKN531zvO5MLH2qf83o0JpdDG7jrtnx2MERyZeAhtaOmdCONbXjrG1FKkRjqR3Pso56SdYJ6+XcS6SEdC7Ah9S88YMkEdCayZv5TbjmZdZK2yqwVeAPdRw+Wjsm32QAAAAASUVORK5CYII=\')';
            event.target.style.backgroundSize = '100% auto';
            event.target.dataset.change = 'true';
        } else {
            event.target.style.backgroundImage = 'url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXUlEQVRYR+1WQU4bQRCsmkXKJVKcF7DgUwIWmxfEvAB4QeAHzg37Eudic4MfxLwAfsDmBRjZKCfD8oIYKTmA4qlodlnHOE6y2o2ED56TZU1PVXdXVy/xxIdPjI8FgUUF5rMCPX+/SmPeAQhABIUmRegC6Mra40p0EE6/9agCl34jkKdDgFVJtyRDJQ/kPiQCSVWSLwCFHPH9WtQavzkm4MCtwRkgGrK2Nmh1cqPOCLwsN3atdARQxmIzJRETSMEJ3XhW26+ig8j971phjHnrfouK1gft4yKkvvj7/sjwVOBySiIm0CvXQwjBklXgwK/9Zum7d3fiWjEJKGE4yT4PGUfih2GXxPn6oL3JWHCeOSOw58oeg5v7sz+J73+QcO0Q8Ekju8l+ud6RsF25apdcRv1y4xTA1t+ycyQqV62XeSqQxvRW60MSp+yv1rsgo/VBa/uBgLI87NjPGqssseNEhWX2yw1J+Fi5ajXTdmR5JI3JcnfWnd5qo0niwxwQmGhBov77r1myMtDO60Hb6SXXibUm+Q8i5FYqqmwi1O1z+8xfiZrDXOhu9FMRzhrDb+YuSqxz9ikqwEdj+MuIuLFk7RtnRLFZeOwQjF1wfIQbWbtbRP2JEZlzUBeVQbs6YcUKCV571u6kVuwsGl68TEqy6hYBdkkkVmxOBK0Yy6rbB1PLSKFbFqRqRX1/unnJMsJhvOwewN2d39ax9XTkSu/cDlRoxELr2FIBxCqJkqDPZsTazHU8yTgRJnfdggK5kVfpcZx0AaKrkTr//CApBJQzeD6/CXMmkytsUYFFBX4C8hxhBGY8emEAAAAASUVORK5CYII=\')';
            event.target.style.backgroundSize = '100% auto';
            event.target.dataset.change = 'false';
        }
    }
};

var VConfig$1 = {
    priority: 1,
    init: function init(app) {
        app.VConfig = new VConfig(app.options.VConfig);
        app.VConfig.config(app);
    }
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
    function App(options) {
        _classCallCheck(this, App);

        this.options = options || {};
        this.onReady = options.onReady || function () {};
        this.modules = [];
        this.init();
    }

    _createClass(App, [{
        key: 'init',
        value: function init() {
            var _this = this;

            window.addEventListener('DOMContentLoaded', function () {

                //载入所有模块，包括路由、分享、音乐等
                _this.loadModule(App.modules);

                //调用路由模块
                // this.$route.to();

                //app ready
                _this.onReady();

                console.log('App-core: modules loaded --> route init --> app.onReady');
            }, false);
        }
    }, {
        key: 'loadModule',
        value: function loadModule(modules) {
            var _this2 = this;

            // module.priority 可选值：0，1，2
            // 模块执行顺序
            modules.sort(function (prev, next) {
                return prev.priority - next.priority;
            }).map(function (module) {
                module.init && typeof module.init == 'function' && module.init(_this2);
            });
        }
    }], [{
        key: 'use',
        value: function use(module) {
            var _this3 = this;

            if (Array.isArray(module)) {
                module.map(function (item) {
                    return _this3.use(item);
                });
            } else {
                module.priority = module.priority === undefined ? 2 : module.priority;
                App.modules.push(module);
            }
        }
    }]);

    return App;
}();

App.modules = [];


App.use(VConfig$1);
var app = new App({
    VConfig: [{
        target: 'name',
        //label
        label: '名字',
        type: {
            // switch input
            name: 'input'
        },
        toastSuccessTxt: '设置成功',
        success: function success(data) {
            console.log('app', data);
        }
    }, {
        target: '我',
        //label
        label: '我是第二个',
        toastSuccessTxt: '设置好了哦~~',
        type: {
            // switch input
            name: 'bool'
        },
        success: function success(data) {
            console.log('app', data);
        }
    }, {
        target: 'nan',
        toastSuccessTxt: '设置好了哦~~',
        type: {
            // switch input
            name: 'bool'
        },
        success: function success(data) {
            console.log('app', data);
        }
    }],
    onReady: function onReady() {
        // 全局初始化的事件在这里执行
        app.name = 'hmz';
        app.age = '26';
        app.nan = true;
        app.nv = false;
    }
});

})));
//# sourceMappingURL=example.js.map
