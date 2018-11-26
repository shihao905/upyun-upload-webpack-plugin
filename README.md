# upyun-upload-webpack-plugin
基于又拍云上传的webpack插件

## 简要 

插件基于[https://github.com/shihao905/upload-upyun.git](https://github.com/shihao905/upload-upyun.git)开发

## 安装

```js
$ npm install --save upyun-upload-webpack-plugin
```

## 使用

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
  });
]
```

### 编译完成后插件会再次提示上传信息 
![](https://img2.ultimavip.cn/ultimavip/ultimavip-uplaod.png)
