---
title: Next.js 14 入门指南 — App Router 完全解读
slug: getting-started-with-nextjs
date: 2024-02-20
tags: [Next.js, React, 前端]
category: 技术
excerpt: 全面解析 Next.js 14 App Router 的核心概念，包括路由、布局、数据获取和服务端渲染。
coverImage: /images/nextjs.jpg
featured: true
---

## 什么是 Next.js？

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

```
app/
├── layout.tsx    # 根布局
├── page.tsx      # 页面
├── loading.tsx   # 加载状态
├── error.tsx     # 错误处理
├── not-found.tsx # 404
└── [slug]/
    └── page.tsx  # 动态路由
```

### 数据获取

```tsx
// 服务端组件中直接 async
async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function Page() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
```

## 总结

Next.js 14 的 App Router 为 React 应用带来了全新的开发体验，Server Components 和流式渲染让页面性能提升到了新的高度。