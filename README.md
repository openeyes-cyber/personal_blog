# Personal Blog — 个人博客系统

基于 **Next.js 16 (App Router)** 构建的 Markdown 动态博客系统，支持标签分类、全文搜索、RSS 订阅、评论互动和后台管理。

---

## 功能特性

### 内容管理
- **Markdown 写作** — 支持 GFM 语法（表格、任务列表、代码块），自动渲染 HTML、生成目录和阅读时间
- **Frontmatter 元数据** — 标题、日期、标签、分类、摘要、封面图、置顶、草稿状态
- **代码高亮** — 基于 rehype-highlight 的多语言语法高亮，支持自动标题锚点链接
- **草稿/发布工作流** — 文章可保存为草稿或立即发布，支持定时发布

### 标签与分类
- **多标签系统** — 每篇文章可绑定多个标签，标签云可视化，颜色标识
- **多级分类** — 支持树形分类结构（如"技术/前端/React"）

### 搜索
- **全文搜索** — 基于 Fuse.js 7 的客户端模糊搜索，标题/摘要/标签加权
- **快捷键搜索** — 按 `⌘K` / `Ctrl+K` 快速调起搜索框

### RSS 订阅
- 支持 **RSS 2.0**、**Atom**、**JSON Feed** 三种标准格式
- HTML `<head>` 自动注入发现链接

### 评论系统
- Markdown 格式评论，支持嵌套回复
- 三级审核流程（待审核/已通过/已拒绝）
- 访客无需登录即可评论

### 用户与认证
- 管理员邮箱密码登录（NextAuth.js + JWT + Prisma Adapter）
- 管理后台侧边栏导航

### 前台展示
- 首页文章列表（分页 + 精选置顶）
- 文章详情页（TOC 浮动目录 + 阅读进度条 + 相关文章推荐）
- 按年月归档、标签云、分类树
- 深色/浅色模式切换（跟随系统 + 手动切换 + localStorage 持久化）
- 完全响应式布局（桌面/平板/手机）

### SEO
- 动态 Meta / Open Graph / Twitter Card
- JSON-LD 结构化数据（BlogPosting Schema）
- 自动生成 sitemap.xml
- robots.txt 配置
- RSS 自动发现链接

### 后台管理
- **数据看板** — 文章数、标签数、评论数、待审核统计
- **文章管理** — 列表/新建/编辑/删除，含 Markdown 编辑器
- **标签管理** — 增删改查，颜色标识
- **分类管理** — 增删改查，支持多级
- **评论管理** — 审核/拒绝/删除
- **站点设置** — 博客标题、描述、SEO 关键词

### 扩展功能
- 邮件订阅（含退订验证）
- 友情链接管理
- 骨架屏加载态
- 404 自定义页面

---

## 技术栈

| 层级 | 技术选型 |
|------|----------|
| 框架 | Next.js 16 (App Router) |
| 语言 | TypeScript 5.x |
| 样式 | Tailwind CSS 4 |
| 内容处理 | unified + remark-parse + remark-gfm + rehype 生态 |
| 搜索 | Fuse.js 7 |
| 数据库 | Prisma 6 + SQLite |
| 认证 | NextAuth.js 4 + JWT + @auth/prisma-adapter |
| 代码高亮 | rehype-highlight |
| 密码加密 | bcryptjs |
| 构建工具 | Turbopack |
| 种子数据 | tsx |

---

## 快速开始

### 环境要求

- Node.js 18+
- npm 9+

### 安装与运行

```bash
# 克隆项目
git clone <repo-url> personal-blog
cd personal-blog

# 安装依赖
npm install

# 配置环境变量
cp .env.example .env
# 编辑 .env 文件，修改 NEXTAUTH_SECRET 等配置

# 初始化数据库
