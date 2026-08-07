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
