# 33甜品店 API 服务

基于 NestJS 的 Node 接口服务，为前端 Vue 落地页提供 API。

## 返回格式

所有接口统一返回：

```json
{
  "result": 1,
  "message": "success",
  "data": <数据内容>
}
```

- `result`: `1` 成功，`0` 失败  
- `message`: 提示信息  
- `data`: 业务数据，失败时为 `null`

## 接口说明

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/health` | 健康检查 |
| GET | `/api/hero` | 首屏 Hero 数据 |
| GET | `/api/menu` | 人气甜品列表 |
| GET | `/api/about` | 关于我们 |
| GET | `/api/contact` | 联系区块展示数据 |
| POST | `/api/contact` | 联系/留言提交（body: `{ name?, phone?, message? }`） |

## 开发

```bash
# 在 Server 目录下
pnpm install
pnpm dev
```

默认运行在 **http://localhost:3000**。前端通过 Vite 代理 `/api` 到本服务即可。

## 生产

```bash
pnpm build
pnpm start
```

## 部署

在 Server 目录下执行（脚本位于 `scripts/deploy.js`）：

```bash
pnpm run deploy
```

会在本地构建后上传到服务器并执行 `pnpm install --prod`、pm2 重启。也可在项目根目录执行 `node scripts/deploy-server.js` 委托到本脚本。

## CORS

已在 `main.ts` 中启用 CORS，允许跨域请求。
