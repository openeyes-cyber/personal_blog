|------|------|
| **User** | 用户（管理员/编辑，含角色、密码哈希、社交链接） |
| **Account** | OAuth 账号关联（NextAuth） |
| **Session** | 会话管理（NextAuth） |
| **VerificationToken** | 邮箱验证令牌 |
| **Post** | 文章（Markdown 内容 + HTML 缓存 + 标签关联 + 分类 + 阅读量/点赞数） |
| **Category** | 分类（支持多级树形结构，含 self-referencing parentId） |
| **Tag** | 标签（含颜色标识和文章计数） |
| **PostTag** | 文章-标签多对多关联 |
| **Comment** | 评论（支持嵌套回复、审核状态、IP/UA 记录） |
| **SiteSetting** | 站点键值对设置 |
| **Subscription** | 邮件订阅（含退订 token） |
| **FriendLink** | 友情链接 |

---

## API 参考

### 公开 API

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/search?q=` | 全文搜索 |
| GET | `/api/comments?postId=` | 获取文章评论 |
| POST | `/api/comments` | 提交评论 |
| POST | `/api/subscribe` | 邮件订阅 |
| DELETE | `/api/subscribe?token=` | 退订 |
| GET | `/feed.xml` | RSS 2.0 |
| GET | `/atom.xml` | Atom |
| GET | `/feed.json` | JSON Feed |
| GET | `/sitemap.xml` | Sitemap |

### 管理 API（需认证）

| 方法 | 路径 | 说明 |
|------|------|------|
| GET | `/api/admin/posts` | 文章列表 |
| POST | `/api/admin/posts` | 创建文章 |
| PUT | `/api/admin/posts` | 更新文章 |
| DELETE | `/api/admin/posts` | 删除文章 |
| GET | `/api/admin/tags` | 标签列表 |
| POST | `/api/admin/tags` | 创建标签 |
| DELETE | `/api/admin/tags` | 删除标签 |
| GET | `/api/admin/categories` | 分类列表 |
| POST | `/api/admin/categories` | 创建分类 |
| DELETE | `/api/admin/categories` | 删除分类 |
| GET | `/api/admin/comments` | 评论列表 |
| PUT | `/api/admin/comments` | 审核评论 |
| GET | `/api/admin/settings` | 获取站点设置 |
| PUT | `/api/admin/settings` | 更新站点设置 |

---

## 环境变量

```env
# 数据库
DATABASE_URL="file:./prisma/dev.db"

# NextAuth 认证
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"

# 站点信息
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
NEXT_PUBLIC_SITE_TITLE="Personal Blog"
NEXT_PUBLIC_SITE_DESCRIPTION="个人技术博客，分享编程、技术与生活感悟。"
```

---

## 常用命令

```bash
# 开发
npm run dev          # 启动开发服务器（Turbopack）

# 构建
npm run build        # 生产构建
npm start            # 启动生产服务器

# 数据库
npx prisma db push   # 同步数据库 schema
npx prisma db seed   # 写入种子数据
npx prisma studio    # 打开数据库管理界面

# 代码检查
npm run lint         # ESLint 检查
```
