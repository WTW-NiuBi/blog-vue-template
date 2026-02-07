# 33甜品店

33甜品店的手作甜品单页落地页，基于 Vue 3 + TypeScript + Vite 构建，风格简约现代。

## 技术栈

- **Vue 3** + Composition API
- **TypeScript**
- **Vue Router**（单页锚点导航）
- **Vite**
- **Less**（主题变量与组件样式）

## 项目结构

```
├── public/
│   └── reset.css          # 浏览器样式重置（通过 index.html 引入）
├── src/
│   ├── assets/
│   │   └── styles/
│   │       └── main.less   # 主题变量与全局样式
│   ├── components/
│   │   └── dessert/        # 落地页区块组件
│   │       ├── HeroSection.vue
│   │       ├── MenuSection.vue
│   │       ├── AboutSection.vue
│   │       └── ContactSection.vue
│   ├── router/
│   ├── store/
│   ├── views/
│   │   └── Home.vue        # 落地页主视图
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 开发

```bash
# 安装依赖（推荐 pnpm）
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览生产构建
pnpm run serve

# 类型检查
pnpm run type-check
```

## 部署

```bash
pnpm run deploy
```

根据 `scripts/deploy.js` 将 `dist` 目录部署到目标环境。

## 说明

- 全局样式重置通过 `index.html` 中的 `<link href="/reset.css">` 引入，保证优先生效。
- 主题色、间距、圆角等均在 `src/assets/styles/main.less` 中通过变量统一管理。
- 页面为单页结构，顶部导航通过锚点（#menu、#about、#contact）平滑滚动到对应区块。
