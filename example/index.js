import VConfig from '../src/index';

/**
 * App constructor
 *
 * @param {Object} options
 */

class App{
    constructor(options){
        this.options = options || {};
        this.onReady = options.onReady || function () {};
        this.modules = [];
        this.init();

    }
    init(){
        window.addEventListener('DOMContentLoaded', () => {

            //载入所有模块，包括路由、分享、音乐等
            this.loadModule(App.modules);

            //调用路由模块
            // this.$route.to();

            //app ready
            this.onReady();

            console.log('App-core: modules loaded --> route init --> app.onReady');

        },false);
    }
    loadModule(modules){
        // module.priority 可选值：0，1，2
        // 模块执行顺序
        modules.sort((prev,next) => prev.priority - next.priority).map((module) => {
            module.init && typeof module.init == 'function' && module.init(this);
        });
    }

    static modules = [];

    static use(module){
        if (Array.isArray(module)) {
            module.map(item => this.use(item));
        } else {
            module.priority = module.priority === undefined ? 2 : module.priority;
            App.modules.push(module);
        }
    }

}

App.use(VConfig);
const app = new App({
    VConfig: [
        {
            target: 'name',
            //label
            label: '名字',
            type: {
                // switch input
                name: 'input',
            },
            toastSuccessTxt: '设置成功',
            success(data){
                console.log('app', data);
            },
        },
        {
            target: '我',
            //label
            label: '我是第二个',
            toastSuccessTxt: '设置好了哦~~',
            type: {
                // switch input
                name: 'bool',
            },
            success(data){
                console.log('app', data);
            },
        },
        {
            target: 'nan',
            toastSuccessTxt: '设置好了哦~~',
            type: {
                // switch input
                name: 'bool',
            },
            success(data){
                console.log('app', data);
            },
        },
    ],
    onReady() {
        // 全局初始化的事件在这里执行
        app.name = 'hmz';
        app.age = '26';
        app.nan = true;
        app.nv = false;
    },
});
