
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