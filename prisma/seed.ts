  return res.json();
}

export default async function Page() {
  const posts = await getPosts();
  return <PostList posts={posts} />;
}
\`\`\`

## 总结

Next.js 14 的 App Router 为 React 应用带来了全新的开发体验。`,
      tags: ['Next.js', 'React', '入门'],
      category: 'React',
      featured: true,
    },
    {
      slug: 'typescript-advanced-patterns',
      title: 'TypeScript 高级类型模式',
      content: `## 条件类型

\`\`\`typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // true
type B = IsString<42>;       // false
\`\`\`

## 映射类型

\`\`\`typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};
\`\`\`

## 模板字面量类型

\`\`\`typescript
type EventName = \`on\${Capitalize<string>}\`;
// 'onChange' | 'onClick' | 'onSubmit' | ...
\`\`\`

## 总结

掌握这些高级类型模式能让你写出更安全、更灵活的 TypeScript 代码。`,
      tags: ['TypeScript', '进阶'],
      category: '前端',
      featured: false,
    },
    {
      slug: 'css-grid-complete-guide',
      title: 'CSS Grid 完全指南 — 从入门到实战',
      content: `## 什么是 Grid？

CSS Grid 是一个二维布局系统，可以同时控制行和列。
