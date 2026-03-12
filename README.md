# Incense Site

香薰品牌展示站第一版前端骨架，基于 `Vue 3 + Vite + Tailwind CSS + TypeScript`。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 生产构建

```bash
pnpm build
```

## 当前内容

- 单页结构：Header / Hero / 产品展示 / 品牌介绍 / Footer
- 本地静态内容数据：`src/data/site-content.ts`
- 内容类型定义：`src/types/site.ts`
- 页面区块组件：`src/components/sections`
- 为第二阶段 Sanity CMS 预留了内容结构映射

## GitHub + Vercel 部署

### 1. 首次提交到 GitHub

当前本地仓库已经初始化，并已连接远端：

```bash
git remote -v
```

首次提交建议执行：

```bash
git add .
git commit -m "feat: add static brand site v1 scaffold"
git push -u origin main
```

### 2. 在 Vercel 中导入仓库

1. 打开 Vercel 并使用 GitHub 登录
2. 选择 `Add New...` → `Project`
3. 导入仓库 `zengchao304/incense-site`
4. 保持默认检测结果，或核对如下配置：
   - Framework Preset: `Vite`
   - Install Command: `pnpm install`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
5. 点击 `Deploy`

### 3. 上线说明

- 首次上线可以直接使用 `*.vercel.app` 链接，不需要先绑定正式域名
- 后续每次 push 到 GitHub，Vercel 会自动重新部署
- 正式域名可以在第一版稳定后再绑定
