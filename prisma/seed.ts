
## 基础概念

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
\`\`\`

## 常用布局模式

### 圣杯布局

\`\`\`css
.layout {
  display: grid;
  grid-template: 
    "header header header" 60px
    "nav    main   aside" 1fr
    "footer footer footer" 100px
    / 200px 1fr 200px;
}
\`\`\`

## 总结

Grid 是现代 CSS 布局的首选方案。`,
      tags: ['CSS', '入门'],
      category: '前端',
      featured: false,
    },
    {
      slug: 'react-server-components',
      title: 'React Server Components 深度解析',
      content: `## 什么是 Server Components？

React Server Components 允许组件在服务端渲染，并将结果发送给客户端。

## 核心优势

### 1. 零 Bundle 大小

\`\`\`tsx
// Server Component — 不会增加客户端 JS 体积
import { marked } from 'marked';

export default function Post({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: marked(content) }} />;
}
\`\`\`

### 2. 直接访问后端

\`\`\`tsx
// 无需 API 层
async function getData() {
