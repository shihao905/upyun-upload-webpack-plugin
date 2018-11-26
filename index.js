const UpyunUpload = require('anve-upload-upyun');
const path = require('path');
class QiniuPlugin {
  constructor(option) {
    this.serviceName = option.serviceName;
    this.operatorName = option.operatorName;
    this.password = option.password;
    this.remoteFilePath = option.remoteFilePath;
    this.filePath = option.filePath;
  }
  apply(compiler) {
    compiler.plugin('after-emit', () => {
      new UpyunUpload({
        serviceName: this.serviceName, // 服务名
        operatorName: this.operatorName, // 操作员名
        password: this.password, // 密码
        remoteFilePath: this.remoteFilePath, // 上传服务器路径
        filePath: this.filePath // 本地文件夹路径
      });
    });
  }
}
module.exports = QiniuPlugin;