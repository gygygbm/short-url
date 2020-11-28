### 第一步
`npm init` 
### 第二步（安装所需要的npm包）
`npm i express mongoose`
### 第三步安装nodemon
```
# 安装开发环境需要的包(服务器自动刷新)
npm i --save-dev nodemon
# 如果出现'nodemon' 不是内部或外部命令，也不是可运行的程序
或批处理文件。
#使用全局安装命令
npm install -g nodemon
```
### 第四步
```
# 在package.json文件中添加
 "scripts": {
    "deVStart": "nodemon server.js"
  },
```
### 第五步
`在根目录创建启动脚本：server.js`

### 在server.js编写代码
```
const express = require('express')
const app = express()

app.listen(process.env.PORT || 5000)
```
### 启动脚本
`nodemon server.js `

### 创建model文件
`shortUrl.js`
### 安装shortid
`npm i shortid`