// import is from '@meitu/is';
import './style/main.css';
import utils from './utils';

function VConfig(options) {
    this.init(options);
}

VConfig.prototype = {
    init(options){
        if (!Array.isArray(options)){
            let err = new Error('传入的参数必须为数组哦');
            console.log('VConfig.options', err.message)
            return err;
        }
        this.options = utils.extend(true,[{
            //必填
            target: null,
            //label
            label: '',
            type: {
                // bool input
                name: 'bool',
                replaceData: '',
            },
            toastSuccessTxt: '设置成功',
            toastErrorTxt: '设置失败',
            success(){},
            error(){},
        }], options);
        console.log(this.options)
        this.changeAble = true;
        this.MConfigHTML = `<div class="MConfig js-MConfig">VConfig</div>`;
        this.MCDialogHTML = `<div class="MConfig-dialog js-MConfig-dialog">
                            <div class="main">
                                <div class="head">
                                    VConfig
                                </div>
                                <div class="body js-body">
                                    
                                </div>
                                <div class="foot">Thanks</div>
                                <div class="close-icon js-close"></div>
                            </div>
                        </div>`;
        this.MCItemHTML = ``;
        this.MCToastHTML = ``;

        this.renderMC().renderDialog().renderItem().renderToast(this.options[0].toastSuccessTxt);

        this.bind();
        console.log(this);
    },

    renderMC(){
        let MConfigDiv = document.createElement('div');
        MConfigDiv.className = 'MConfig-wrap';
        MConfigDiv.innerHTML = this.MConfigHTML;
        document.body.appendChild(MConfigDiv);
        return this;
    },
    renderDialog(){
        let MCDialogDiv = document.createElement('div');
        MCDialogDiv.className = 'MConfig-dialog-wrap';
        MCDialogDiv.innerHTML = this.MCDialogHTML;
        document.body.appendChild(MCDialogDiv);
        return this;
    },
    renderItem(){
        this.options.map((item, index) =>{
            console.log('renderItem', item);
            this.MCItemHTML += `<div class="item">
                         <div class="left label">${item.label ? item.label : item.target}</div>
                         <div class="right">
                              ${item.type.name === 'input' ? `<input type="text" class="input js-input js-input-${index}"><div class="confirm-btn js-confirm-btn js-confirm-btn-${index}" data-index="${index}">确定</div>` : `<div class="bool js-bool js-bool-${index}" data-change="false" data-index="${index}"></div>`}
                         </div>
                       </div>
                      `;
        });
        utils.$('.js-MConfig-dialog .js-body').innerHTML = this.MCItemHTML;
        return this;
    },
    renderToast(content){
        console.log(content);
        this.MCToastHTML = `<div class="MConfig-toast js-MConfig-toast">${content}</div>`;
        let MCToastDiv = document.createElement('div');
        MCToastDiv.className = 'MConfig-toast-wrap';
        MCToastDiv.innerHTML = this.MCToastHTML;
        document.body.appendChild(MCToastDiv);
        return this;
    },

    bind(){
        utils.$('.js-MConfig').addEventListener('click', () =>{
            this.show('.js-MConfig-dialog');
        });
        utils.$('.js-MConfig-dialog .js-close').addEventListener('click', () =>{
            this.hide('.js-MConfig-dialog');
        });
        utils.$('.js-MConfig-dialog').addEventListener('click', (event)=>{
            event.target.className === 'MConfig-dialog js-MConfig-dialog' && this.hide('.js-MConfig-dialog');
        });

        utils.drag('.js-MConfig');
    },

    config(app){
        if (typeof app !== 'object')  return false;
        Array.from(document.querySelectorAll('.js-bool')).map((item) =>{
            item.addEventListener('click', (event) =>{
                this.doBool(event,app);
            });
        });

        Array.from(document.querySelectorAll('.js-confirm-btn')).map((item) =>{
            item.addEventListener('click', (event) =>{
                this.doInput(event,app);
            });
        });
    },

    show(ele){
        utils.$(ele).parentNode.style.display = 'block';
    },
    hide(ele){
        utils.$(ele).parentNode.style.display = 'none';
    },

    toast(content = '', delay = 2000) {
        let timer = null;
        utils.$('.js-MConfig-toast').innerText = content;
        this.show('.js-MConfig-toast');
        this.changeAble = false;
        clearTimeout(timer);
        timer = setTimeout(() => {
            this.hide('.js-MConfig-toast');
            this.changeAble = true;
        }, delay);
    },

    doInput(event,app){
        if (!this.changeAble) return false;
        let index = event.target.dataset.index;
        if (typeof app[this.options[index].target] !== 'undefined') {
            app[this.options[index].target] = !app[this.options[index].target];
        } else {
            this.toast(`app没有${this.options[index].target}属性哦~~`);
            return false;
        }
        app[this.options[index].target] = event.target.parentNode.firstChild.nextSibling.value;
        this.options[index].success && this.options[index].success(app);
        this.options[index].toastSuccessTxt ? this.toast(this.options[index].toastSuccessTxt) : this.toast('设置成功');
    },
    doBool(event,app){
        if (!this.changeAble) return false;
        let index = event.target.dataset.index;
        if (typeof app[this.options[index].target] !== 'undefined') {
            app[this.options[index].target] = !app[this.options[index].target];
        } else {
            this.toast(`app没有${this.options[index].target}属性哦~~`);
            return false;
        }
        this.options[index].success && this.options[index].success(app);
        this.options[index].toastSuccessTxt ? this.toast(this.options[index].toastSuccessTxt) : this.toast('设置成功');
        let bool = event.target.dataset.change;
        if (bool === 'false'){
            event.target.style.backgroundImage = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACQklEQVRYR+1WS3YSURSsamyYKZl5jvLJRGGUdgXCCiQrEHeAKzCuINmBZAXiCkJWkM4IdBIEPcchwZH9pMvz2jS/oCF0zgkD3hDuvVWv7n23mrjnw3vGx5bAVoHNVKDz9EHFIV+L8AB6yV6KfAp+KB2Xv/1uL9aaU+DLE9cLHRyCrAC6hNgW4SchQMEDVQH4CFLbCfH22XczqTkhEIGncAKAEhrlgWkmAV7M7eTcOokjAHLGqMYkIgITcOGrjKmVf6CXBNyCOWTB1gjD8DSWvvMYRbpuC0QhJhER6OTcNglPgfGSgE9VZHbuAlI789Ps7w4xjEikXR/CWWlgqrQDR8c5kfQmiez/BJ8wkZ8ZmWpEImoHPygMq+zk3CaJWqlv5lnfsgfdvDuMBu1/R/hUGgQ1G2LjJbTYzbk+wF78xy1xo/BYxVVyS/0gans3l26BKrCbT0vA+3I/OFilwLKYTj59QODdKvlWdjuUcc4GELiDFnzOpWpi6uMqCmRGwY4dxKgFUDEewlelvtlZpcCymIsssr8eur21hvCunuHNKugyMzLFa89wZhHtKTAvkiwiexk4TpNAtAXjI+kUxtRt7atFdCbhvDwwldlVbJ3qQoHZT0Ji+izpSRimQvjx3r8Ct7Oy64xRsb8vmpElIQKN531zvO5MLH2qf83o0JpdDG7jrtnx2MERyZeAhtaOmdCONbXjrG1FKkRjqR3Pso56SdYJ6+XcS6SEdC7Ah9S88YMkEdCayZv5TbjmZdZK2yqwVeAPdRw+Wjsm32QAAAAASUVORK5CYII=')`;
            event.target.style.backgroundSize = `100% auto`;
            event.target.dataset.change = 'true';
        }
        else {
            event.target.style.backgroundImage = `url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXUlEQVRYR+1WQU4bQRCsmkXKJVKcF7DgUwIWmxfEvAB4QeAHzg37Eudic4MfxLwAfsDmBRjZKCfD8oIYKTmA4qlodlnHOE6y2o2ED56TZU1PVXdXVy/xxIdPjI8FgUUF5rMCPX+/SmPeAQhABIUmRegC6Mra40p0EE6/9agCl34jkKdDgFVJtyRDJQ/kPiQCSVWSLwCFHPH9WtQavzkm4MCtwRkgGrK2Nmh1cqPOCLwsN3atdARQxmIzJRETSMEJ3XhW26+ig8j971phjHnrfouK1gft4yKkvvj7/sjwVOBySiIm0CvXQwjBklXgwK/9Zum7d3fiWjEJKGE4yT4PGUfih2GXxPn6oL3JWHCeOSOw58oeg5v7sz+J73+QcO0Q8Ekju8l+ud6RsF25apdcRv1y4xTA1t+ycyQqV62XeSqQxvRW60MSp+yv1rsgo/VBa/uBgLI87NjPGqssseNEhWX2yw1J+Fi5ajXTdmR5JI3JcnfWnd5qo0niwxwQmGhBov77r1myMtDO60Hb6SXXibUm+Q8i5FYqqmwi1O1z+8xfiZrDXOhu9FMRzhrDb+YuSqxz9ikqwEdj+MuIuLFk7RtnRLFZeOwQjF1wfIQbWbtbRP2JEZlzUBeVQbs6YcUKCV571u6kVuwsGl68TEqy6hYBdkkkVmxOBK0Yy6rbB1PLSKFbFqRqRX1/unnJMsJhvOwewN2d39ax9XTkSu/cDlRoxELr2FIBxCqJkqDPZsTazHU8yTgRJnfdggK5kVfpcZx0AaKrkTr//CApBJQzeD6/CXMmkytsUYFFBX4C8hxhBGY8emEAAAAASUVORK5CYII=')`;
            event.target.style.backgroundSize = `100% auto`;
            event.target.dataset.change = 'false';
        }
    },
};

export default {
    priority:1,
    init: function (app) {
        app.VConfig = new VConfig(app.options.VConfig);
        app.VConfig.config(app);
    },
};