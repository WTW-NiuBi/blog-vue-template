# Vue Template

这是一个基于Vue 3 + TypeScript + Composition API的模板项目。

## 特性

- Vue 3
- TypeScript
- Composition API
- Vue Router
- Vuex
- Vite

## 项目结构

```
├── public/             # 静态资源
├── src/                # 源代码
│   ├── assets/         # 资源文件
│   ├── components/     # 组件
│   ├── router/         # 路由配置
│   ├── store/          # 状态管理
│   ├── views/          # 视图组件
│   ├── App.vue         # 根组件
│   ├── main.ts         # 入口文件
│   └── shims-vue.d.ts  # TypeScript声明
├── index.html          # HTML模板
├── package.json        # 项目依赖
├── tsconfig.json       # TypeScript配置
└── vite.config.ts      # Vite配置
```

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产版本
npm run serve

# 类型检查
npm run type-check
```