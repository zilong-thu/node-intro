# NodeJS Introduction

这是一个 NodeJS 入门分享示例代码仓库。

主要面向后端同学

## 简史
**JavaScript**

诞生年代：1995 – Brendan Eich。官方名称为 ECMAScript。ECMAScript 标准对于 I/O 相关的内容完全不做定义，NodeJS 这样的运行环境的 I/O 由 NodeJS 引擎自行实现。

**NodeJS**

Ryan Dahl，2009，在一次 JSConf 上介绍了 NodeJS。

## NodeJS 特点

+ 事件驱动、非阻塞 I/O
+ 单线程

### 事件驱动、非阻塞 I/O

### 单线程

因为JS代码运行在单线程里，所以不存在死锁问题，不存在线程切换的性能开销。

## 应用示例

### 作为服务端- Node 内置 JS 模块 http server

文件：`app-http-server.js`

### 作为客户端-爬虫示例，请求一个网页，保存之

文件：`request-web-page.js`

### 深入数据-连接mysql的服务示例

文件：`app-using-mysql.js`

## TODO:利用多核CPU

### 多个 node 进程实例

TODO

一个 Node 进程只能利用一个核。

### 子进程应对 CPU 密集应用

TODO

## NodeJS 应用场景总结

### HTTP 服务器

NodeJS 设计之初的目的。是应用非常广泛的场景。例如，猫眼PC版（http://maoyan.com），猫眼选座 i 版，淘宝……

### 前端构建

因为具备了 I/O 能力，所以可以使用 JS 来分析、处理文件，进行压缩、uglify，或者进行文件依赖关系解析然后打包到一起并输出文件。

### 脚本程序

就像 Python、Ruby 一样，可以随便写各种各样的JS脚本程序运行。

## NodeJS 未来不完全展望

+ 微服务

## 参考资料

+ 官网：https://nodejs.org/en/