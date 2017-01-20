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

### 作为客户端-爬虫示例，请求一个网页，保存之

### 深入数据-连接mysql的服务示例

## 利用多核CPU
### 多个 node 进程实例

一个 Node 进程只能利用一个核。

### 子进程应对 CPU 密集应用

TODO


## 参考资料

+ 官网：https://nodejs.org/en/