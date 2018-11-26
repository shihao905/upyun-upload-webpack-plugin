# upyun-upload-webpack-plugin 

基于又拍云上传的webpack插件  
[https://github.com/shihao905/upyun-upload-webpack-plugin.git](https://github.com/shihao905/upyun-upload-webpack-plugin.git)

## describe  

插件基于**anve-upload-upyun**开发，单独使用访问：[https://github.com/shihao905/upload-upyun.git](https://github.com/shihao905/upload-upyun.git)

## install

```js
$ npm install --save upyun-upload-webpack-plugin
```

## use

```js
const UpyunUpload = require('upyun-upload-webpack-plugin');
const path = require('path');

plugins:[
  ...
  new UpyunUpload({
    serviceName: 'testultimavipweb', // 服务名
    operatorName: 'zishu', // 操作员名
    password: 'zishu123', // 密码
    remoteFilePath: '/zishu', // 上传服务器路径
    filePath: path.resolve(__dirname, './dist') // 本地文件夹路径
  })
]
```

### upload the prompt 

![](https://img2.ultimavip.cn/ultimavip/ultimavip-uplaod.png)
