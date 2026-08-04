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
npx prisma db push

# 写入种子数据（含示例文章、标签、分类、管理员账号）
npx prisma db seed

# 启动开发服务器
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看前台，访问 [http://localhost:3000/admin](http://localhost:3000/admin) 进入后台管理。

### 预置账号

| 角色 | 邮箱 | 密码 |
|------|------|------|
| 管理员 | admin@example.com | admin123 |

### 构建生产版本

```bash
npm run build
npm start
```

---

## 项目结构

```
personal-blog/
├── content/                     # Markdown 文章源文件
│   └── posts/{year}/           # 按年份分类
├── prisma/
│   ├── schema.prisma           # 数据库模型定义（11 个模型）
│   ├── seed.ts                 # 种子数据脚本
│   └── dev.db                  # SQLite 数据库文件
├── public/                     # 静态资源
├── src/
│   ├── app/                    # Next.js App Router 路由
│   │   ├── (public)/           # 前台页面
│   │   │   ├── page.tsx        # 首页（分页 + 置顶）
│   │   │   ├── posts/[slug]/   # 文章详情（TOC + 进度条 + 相关文章）
│   │   │   ├── tags/           # 标签云 / 标签详情
│   │   │   ├── categories/     # 分类树 / 分类详情
│   │   │   ├── archive/        # 按年月归档
│   │   │   ├── search/         # 全文搜索
│   │   │   ├── about/          # 关于页面
│   │   │   ├── subscribe/      # 邮件订阅
│   │   │   ├── feed.xml/       # RSS 2.0
│   │   │   ├── atom.xml/       # Atom
│   │   │   ├── feed.json/      # JSON Feed
│   │   │   └── sitemap.xml/    # Sitemap
│   │   ├── admin/              # 后台管理
│   │   │   ├── page.tsx        # 数据看板
│   │   │   ├── posts/          # 文章管理
│   │   │   ├── tags/           # 标签管理
│   │   │   ├── categories/     # 分类管理
│   │   │   ├── comments/       # 评论审核
│   │   │   └── settings/       # 站点设置
│   │   ├── auth/               # 登录
│   │   └── api/                # API 路由
│   │       ├── admin/          # 管理 API（需认证）
│   │       ├── auth/           # NextAuth 认证
│   │       ├── comments/       # 公开评论 API
│   │       ├── search/         # 搜索 API
│   │       └── subscribe/      # 订阅 API
│   ├── components/
│   │   ├── layout/             # Header / Footer / Sidebar
│   │   ├── post/               # PostCard / PostContent / PostTOC / PostNav / ReadingProgress / RelatedPosts
│   │   ├── comment/            # CommentList / CommentForm
│   │   ├── search/             # SearchBar / SearchResults
│   │   ├── tags/               # TagBadge / TagCloud
│   │   ├── theme/              # ThemeProvider / ThemeToggle
│   │   └── ui/                 # Pagination / Skeleton / EmptyState
│   ├── lib/                    # 工具库
│   │   ├── markdown.ts         # Markdown 渲染引擎（unified 管线）
│   │   ├── posts.ts            # 文章查询
│   │   ├── tags.ts             # 标签查询
│   │   ├── categories.ts       # 分类查询
│   │   ├── search.ts           # Fuse.js 搜索
│   │   ├── rss.ts              # RSS / Atom / JSON Feed 生成
│   │   ├── sitemap.ts          # Sitemap 生成
│   │   ├── comments.ts         # 评论 CRUD
│   │   ├── seo.ts              # SEO 元数据
│   │   ├── auth.ts             # NextAuth 配置
│   │   ├── email.ts            # 邮件模板
│   │   ├── db.ts               # PrismaClient 单例
│   │   └── utils.ts            # 通用工具函数
│   ├── hooks/                  # useDebounce / useLocalStorage
│   ├── styles/                 # 全局样式（Tailwind）
│   └── types/                  # TypeScript 类型定义
├── .env.example                # 环境变量示例
├── package.json
├── tsconfig.json
├── next.config.ts
└── tailwind.config.ts
```

---

## 数据模型

| 模型 | 说明 |
|------|------|
| **User** | 用户（管理员/编辑，含角色、密码哈希、社交链接） |
| **Account** | OAuth 账号关联（NextAuth） |
| **Session** | 会话管理（NextAuth） |
| **VerificationToken** | 邮箱验证令牌 |
| **Post** | 文章（Markdown 内容 + HTML 缓存 + 标签关联 + 分类 + 阅读量/点赞数） |
| **Category** | 分类（支持多级树形结构，含 self-referencing parentId） |
| **Tag** | 标签（含颜色标识和文章计数） |
| **PostTag** | 文章-标签多对多关联 |
| **Comment** | 评论（支持嵌套回复、审核状态、IP/UA 记录） |
| **SiteSetting** | 站点键值对设置 |
| **Subscription** | 邮件订阅（含退订 token） |
| **FriendLink** | 友情链接 |

---

## API 参考

### 公开 API

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/search?q=` | 全文搜索 |
| GET | `/api/comments?postId=` | 获取文章评论 |
| POST | `/api/comments` | 提交评论 |
| POST | `/api/subscribe` | 邮件订阅 |
| DELETE | `/api/subscribe?token=` | 退订 |
| GET | `/feed.xml` | RSS 2.0 |
| GET | `/atom.xml` | Atom |
| GET | `/feed.json` | JSON Feed |
| GET | `/sitemap.xml` | Sitemap |

### 管理 API（需认证）

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/admin/posts` | 文章列表 |
| POST | `/api/admin/posts` | 创建文章 |
| PUT | `/api/admin/posts` | 更新文章 |
| DELETE | `/api/admin/posts` | 删除文章 |
| GET | `/api/admin/tags` | 标签列表 |
| POST | `/api/admin/tags` | 创建标签 |
| DELETE | `/api/admin/tags` | 删除标签 |
| GET | `/api/admin/categories` | 分类列表 |
| POST | `/api/admin/categories` | 创建分类 |
| DELETE | `/api/admin/categories` | 删除分类 |
| GET | `/api/admin/comments` | 评论列表 |
| PUT | `/api/admin/comments` | 审核评论 |
| GET | `/api/admin/settings` | 获取站点设置 |
| PUT | `/api/admin/settings` | 更新站点设置 |

---

## 环境变量

```env
# 数据库
DATABASE_URL="file:./prisma/dev.db"

# NextAuth 认证
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# 站点信息
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_TITLE="Personal Blog"
NEXT_PUBLIC_SITE_DESCRIPTION="个人技术博客，分享编程、技术与生活感悟。"
```

---

## 常用命令

```bash
# 开发
npm run dev          # 启动开发服务器（Turbopack）

# 构建
npm run build        # 生产构建
npm start            # 启动生产服务器

# 数据库
npx prisma db push   # 同步数据库 schema
npx prisma db seed   # 写入种子数据
npx prisma studio    # 打开数据库管理界面

# 代码检查
npm run lint         # ESLint 检查
```

---

## 部署

### Vercel（推荐）

```bash
npm i -g vercel
vercel
```

### Docker

```bash
docker build -t personal-blog .
docker run -p 3000:3000 personal-blog
```

### 传统部署

```bash
npm run build
npm start
```

---

## 开发计划

- [x] Phase 1: 核心功能 — 路由、Markdown 渲染、标签、搜索、RSS、SEO
- [x] Phase 2: 交互功能 — 评论、认证、后台管理、归档、订阅
- [ ] Phase 3: 增强体验 — PWA 支持、邮件通知、图片优化、更多 Markdown 扩展
- [ ] Phase 4: 高级功能 — i18n 国际化、多语言文章、Webhook、开放 API

---

## License

MIT