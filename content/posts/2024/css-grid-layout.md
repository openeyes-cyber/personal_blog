---
title: CSS Grid 完全指南 — 从入门到实战
slug: css-grid-complete-guide
date: 2024-04-05
tags: [CSS, 前端]
category: 技术
excerpt: 从基础概念到实战布局，全面掌握 CSS Grid 布局的各种技巧。
coverImage: /images/css-grid.jpg
featured: false
---

## 什么是 Grid？

CSS Grid 是一个二维布局系统，可以同时控制行和列。

## 基础概念

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

## 常用布局模式

### 圣杯布局

```css
.layout {
  display: grid;
  grid-template: 
    "header header header" 60px
    "nav    main   aside" 1fr
    "footer footer footer" 100px
    / 200px 1fr 200px;
}
```

## 总结

Grid 是现代 CSS 布局的首选方案，掌握它能让你的布局工作事半功倍。