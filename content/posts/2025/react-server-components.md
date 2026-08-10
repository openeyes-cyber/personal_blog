---
title: React Server Components 深度解析
slug: react-server-components
date: 2025-01-08
tags: [React, 前端, 架构]
category: 技术
excerpt: 深入理解 RSC 的工作原理、优势与最佳实践，以及如何在 Next.js 中充分利用它。
coverImage: /images/rsc.jpg
featured: true
---

## 什么是 Server Components？

React Server Components 允许组件在服务端渲染，并将结果发送给客户端。

## 核心优势

### 1. 零 Bundle 大小

```tsx
// Server Component — 不会增加客户端 JS 体积
import { marked } from 'marked';

export default function Post({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />;
}
```

### 2. 直接访问后端

```tsx
// 无需 API 层
async function getData() {
  const db = await connectDB();
  return db.query('SELECT * FROM posts');
}
```

## 最佳实践

- 尽可能使用 Server Components
- 只在需要交互时使用 'use client'
- 合理使用 Suspense 边界

## 总结

RSC 代表了 React 的演进方向，值得每个 React 开发者深入学习。