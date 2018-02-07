# MAPP 的参数配置工具

# VConfig

> [git](https://github.com/ishareme/VConfig)

> [npm](http://npm.meitu-int.com/#@meitu/vconfig)

## Example

[example](http:///f2er.meitu.com/hmz/VConfig/example/index.html)

## Getting Started
 
 ```shell
 npm set registry http://npm.meitu-int.com 
 ```
 
 ```shell
 npm i @meitu/vconfig --save
 ```

 ```shell
 modules.js
 import VConfig from '@meitu/vconfig';
 ```

## Basic Usage
```sh
app.js

MConfig: [
        {
            target: 'name',
            label: '名字',
            type: {
                name: 'input',
            },
            toastSuccessTxt: '设置成功',
            success(data){
                console.log('app', data);
            },
        },
        {
            target: 'man',
            label: '男',
            toastSuccessTxt: '设置好了哦~~',
            type: {
                name: 'bool',
            },
            success(data){
                console.log('app', data);
            },
        },
        {
            target: 'age',
            label: '年龄',
            type: {
                 name: 'input',
            },
            toastSuccessTxt: '设置成功',
            success(data){
                 console.log('app', data);
            },
        },
    ],
```

### 
MConfig [Array] 每项为对象
   1. target [string | 必填] ，要设置的属性。
   2. type.name  [string | 必填] ， 目前有两种方式 [input,bool]
   3. label  [string | 可选] 项label
   4. toastSuccessTxt [string | 可选] 设置成功toast文本
   5. success(){} [function | 可选] 设置成功回调


