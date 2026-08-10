---
title: TypeScript 高级类型模式
slug: typescript-advanced-patterns
date: 2024-03-10
tags: [TypeScript, 前端, 进阶]
category: 技术
excerpt: 深入探讨 TypeScript 中的高级类型技巧，包括条件类型、映射类型、模板字面量类型等。
coverImage: /images/typescript.jpg
featured: false
---

## 条件类型

```typescript
type IsString<T> = T extends string ? true : false;

type A = IsString<'hello'>;  // true
type B = IsString<42>;       // false
```

## 映射类型

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Optional<T> = {
  [P in keyof T]?: T[P];
};
```

## 模板字面量类型

```typescript
type EventName = `on${Capitalize<string>}`;
// 'onChange' | 'onClick' | 'onSubmit' | ...
```

## 总结

掌握这些高级类型模式能让你写出更安全、更灵活的 TypeScript 代码。