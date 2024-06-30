# ChemPrompter

## 主要功能

- 记录反应
    - 记录参与反应的物质：底物、产物、试剂
    - 记录反应条件：温度、时间
    - 记录各物质用量的比例关系
- 记录反应条件尝试的过程
    一个反应可能进行了多次尝试，每一次尝试的物质用量各不相同，都要记录下来。
- 提示实验操作
    - 根据参与反应的物质，提示实验操作的要点。比如涉及n-BuLi的反应要隔绝空气。
- 计算投料
    对于一个已经成熟的反应，如果需要复现，则需要按照配比重新计算投料

## 程序架构

使用 Node.js 搭建的静态网页.

### 本地运行方法

1. **下载 Node.js**: 从 [Node.js 官网](https://nodejs.org/)下载并安装最新版本的 Node.js (包括 npm).
   - 需要将 Node.js 的安装目录 (包含 `node.exe` 可执行文件) 添加到 `PATH` 环境变量

2. **安装模块**: 在 `ChemPrompter/` 文件夹下, 打开终端, 运行
   ```
   npm install
   ```
   这将下载项目所需要的 Node.js 模块, 存放在 `node_modules/` 文件夹内. 这个文件夹不会被 git 同步.
   - [express](https://expressjs.com/) 是一个 web application 框架, 可以用于搭建网页.
   - [ejs](https://ejs.bootcss.com/) 是一个 JavaScript 模板引擎, 帮你利用普通的 JavaScript 代码生成 HTML 页面.
  
3. **运行服务器**: 在终端运行
   ```
   node app.js
   ```
   服务器将在 `http://localhost:3000` 上运行, 打开浏览器输入该网址即可. 若要结束, 在终端内按下 `Ctrl+C`.

### 目录结构

```
ChemPrompter/
    app.js          (程序入口)
    package.json    (项目配置)
    models/         (程序的主要代码)
        reaction.js
    public/
        css/        (样式表文件夹)
        js/         (代码文件夹)
    views/          (界面)
        index.ejs   (主界面文件)
```

### 具体操作方法

假设你在 `/models/your_code.js` 中编写了两个类 `MyClass1` 和 `MyClass2`.
你需要在文件末尾添加一行

```js
module.exports = { MyClass1, MyClass2 };
```

在 `app.js` 中加入如下代码

```js
const { MyClass1, MyClass2 } = require("./models/your_code.js");
```

便可以在 `app.js` 中使用这两个类.
