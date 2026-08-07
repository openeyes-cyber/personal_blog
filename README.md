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
