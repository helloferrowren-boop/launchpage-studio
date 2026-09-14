# LaunchPage Studio

为个人创作者、小型品牌和工作室提供个人主页、作品集与展示网站制作服务的 React 项目。

## 在线访问

**Live Demo:** [https://launchpage-studio.pages.dev](https://launchpage-studio.pages.dev)

## 项目简介

LaunchPage Studio 是一个网站制作服务展示项目，用于说明可提供的网站类型、套餐、制作流程和联系渠道。项目面向需要清晰展示个人、作品或品牌信息的个人与小型团队，并包含可直接浏览的页面风格演示。

## Demo 页面

以下页面均为 Demo / 演示项目，用于展示不同的网站呈现方向，**不是真实客户案例**。

- [Developer Portfolio](https://launchpage-studio.pages.dev/developer-demo)
- [Photography Portfolio](https://launchpage-studio.pages.dev/photography-demo)
- [Personal Brand Portfolio](https://launchpage-studio.pages.dev/profile-demo)

## 主要功能

- 响应式页面设计，覆盖手机、平板与桌面设备
- 服务范围与价格套餐展示
- 可访问的 Demo 案例页面
- URL 参数自动预选套餐，例如 `?plan=personal#contact`
- 联系需求表单与预算选择
- 邮箱与微信联系方式
- SEO 基础配置，包括标题、描述、关键词、canonical、sitemap 与 robots
- 滚动进入动画
- 通过 Cloudflare Pages 自动部署

## 技术栈

- React
- Vite
- JavaScript
- CSS
- Cloudflare Pages
- GitHub

## 项目结构

```text
launchpage-studio/
├── public/
│   ├── favicon.svg
│   ├── launchpage-icon.svg
│   ├── og-cover.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.css
│   ├── DeveloperDemo.jsx
│   ├── DeveloperDemo.css
│   ├── PhotographyDemo.jsx
│   ├── PhotographyDemo.css
│   ├── ProfileDemo.jsx
│   ├── ProfileDemo.css
│   └── assets/
│       └── hero.png
├── index.html
├── package.json
├── vite.config.js
└── vercel.json
```

## 本地运行

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

构建生产版本：

```bash
npm run build
```

在 Windows PowerShell 中，如果 `npm` 命令无法直接执行，可使用对应的 `npm.cmd` 命令：

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

## 部署

项目使用 Cloudflare Pages 部署，并连接 GitHub 仓库的 `main` 分支。推送到 `main` 后，Cloudflare Pages 会自动构建并发布最新版本。

构建命令：

```bash
npm run build
```

构建产物目录：

```text
dist
```

## 服务范围

- 个人主页
- 作品集网站
- 展示官网
- 前端页面修改
- Bug 修复
- 构建与部署排错

## 联系方式

- 邮箱：[launchpagestudio@163.com](mailto:launchpagestudio@163.com)
- 微信：`duty0629`
- 官网：[https://launchpage-studio.pages.dev](https://launchpage-studio.pages.dev)
