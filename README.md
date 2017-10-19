# React App

> React App 是一个 React 示例项目。
>

## Quick Start

**下载**

```shell
$ git clone https://github.com/dunwu/react-app.git
$ cd react-app
```

**命令**

你可以选择 npm 或 yarn 来安装、运行项目。

- **npm**

```sh
# 安装依赖
$ npm install
# 开发环境，启动一个开发服务
$ npm run dev
# 生产环境，输出文件到 build 目录（所有请求的应答为 mock 数据）
$ npm run proc
# 生产环境，输出文件到 build 目录（所有请求将发送真实 http 请求）
$ npm run real
# 启动单元测试
$ npm run test
# ESLint 检查
$ npm run lint
# 部署到 gh-pages 分支（需要根据个人的 GIthub 账户进行修改）
$ npm run deploy
```

- **yarn**

```sh
# 安装依赖
$ yarn
# 开发环境，启动一个开发服务
$ yarn dev
# 生产环境，输出文件到 build 目录（所有请求的应答为 mock 数据）
$ yarn proc
# 生产环境，输出文件到 build 目录（所有请求将发送真实 http 请求）
$ yarn real
# 启动单元测试
$ yarn test
# ESLint 检查
$ yarn lint
# 部署到 gh-pages 分支（需要根据个人的 GIthub 账户进行修改）
$ yarn deploy
```

## 功能

- 可切换布局形式：上中下布局和侧边栏-上中下布局
- 支持响应式布局
- 根据后台数据动态加载菜单项
- 富文本编辑器
- 二维码生成器
- 拖拽组件
- 展示一些 UI 组件用法
- 开发环境下支持热替换（HMR）
- 开发环境下支持 Redux 开发工具
- 区分环境使用 HTTP 请求，非真实环境下使用 Mock 数据

待补充。。。

## 说明

### 依赖库

- [React](https://github.com/facebook/react) React 是一个用于构建用户界面的 JavaScript 库。
- [Webpack](https://github.com/webpack/webpack) Webpack)是一个模块打包器。
- [Babel](https://babeljs.io/) 一些浏览器并不识别"ES6、React 等语法特性，需要 Babel 来解释语法。
- [ESLint](https://github.com/eslint/eslint) 用于识别"JavaScript 模式的工具，帮助你检视自己的代码。"
- [React Router](https://github.com/ReactTraining/react-router) React 的路由库。
- [Redux](https://github.com/reactjs/redux) JavaScript 应用的状态管理容器。
- [Axios](https://github.com/axios/axios) 基于 Promise 的 HTTP 请求工具，支持浏览器和 Node.js。
- [Ant Design](https://github.com/ant-design/ant-design) 一个丰富的 UI 组件库。
- [Less](https://github.com/less/less.js) Less 是 CSS 预处理语言，它扩展了 CSS 的语法，提供了一些实用的特性。
- [Mock](https://github.com/nuysoft/Mock) 生成仿真数据的 JavaScript 库。

### License

MIT

## 规范

### 语法规范

语法规范上基本使用 JavaScript 社区比较严格的 Airbnb 规范，略微做了调整。

项目中的语法检查配置项可以查看 `codes/config/.eslintrc.js` 文件。 

[Airbnb JavaScript 语法规范](https://github.com/airbnb/javascript)

[Airbnb React 语法规范](https://github.com/airbnb/javascript/tree/master/react)

[Airbnb CSS 语法规范](https://github.com/airbnb/css)

[Airbnb JavaScript 中的 CSS 语法规范](https://github.com/airbnb/javascript/tree/master/css-in-javascript)

