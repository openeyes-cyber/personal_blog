- 开发工具与效率
- 读书笔记与思考

### 代码示例

\`\`\`typescript
function greet(name: string): string {
  return \`Hello, \${name}! Welcome to my blog.\`;
}

console.log(greet('Reader'));
\`\`\`

## 未来计划

- [x] 搭建博客基础框架
- [ ] 完成 10 篇以上技术文章
- [ ] 优化 SEO 和性能
- [ ] 添加评论系统

感谢阅读，希望这个博客能对你有所帮助！`,
      tags: ['入门', '博客'],
      category: '杂谈',
      featured: true,
    },
    {
      slug: 'getting-started-with-nextjs',
      title: 'Next.js 14 入门指南 — App Router 完全解读',
      content: `## 什么是 Next.js？

Next.js 是一个基于 React 的全栈框架，提供了服务端渲染、静态生成、文件系统路由等开箱即用的功能。

## App Router vs Pages Router

Next.js 14 推荐使用 App Router，它基于 React Server Components 构建。

### 核心概念

| 特性 | App Router | Pages Router |
|------|-----------|-------------|
| 路由方式 | 文件系统 | 文件系统 |
| 组件模型 | Server Components | Client Components |
| 布局 | ✅ 嵌套布局 | ❌ 需要手动实现 |
| 加载态 | ✅ loading.tsx | ❌ |
| 错误处理 | ✅ error.tsx | ❌ |

### 文件约定

\`\`\`
app/
├── layout.tsx    # 根布局
├── page.tsx      # 页面
├── loading.tsx   # 加载状态
├── error.tsx     # 错误处理
├── not-found.tsx # 404
└── [slug]/
    └── page.tsx  # 动态路由
\`\`\`

### 数据获取

\`\`\`tsx
// 服务端组件中直接 async
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
