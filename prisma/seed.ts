import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';
import { renderMarkdown, extractExcerpt } from '../src/lib/markdown';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 开始播种数据...');

  // Clean existing data
  await prisma.postTag.deleteMany();
  await prisma.comment.deleteMany();
  await prisma.post.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await prisma.siteSetting.deleteMany();
  await prisma.subscription.deleteMany();
  await prisma.friendLink.deleteMany();

  // Create admin user
  const passwordHash = await hash('admin123', 12);
  const admin = await prisma.user.create({
    data: {
      name: 'Admin',
      email: 'admin@example.com',
      passwordHash,
      role: 'admin',
      bio: '博客管理员',
    },
  });
  console.log('✅ 管理员账号: admin@example.com / admin123');

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({ data: { name: '技术', slug: 'tech', description: '技术相关文章', order: 1 } }),
    prisma.category.create({ data: { name: '前端', slug: 'frontend', description: '前端开发', parentId: null, order: 2 } }),
    prisma.category.create({ data: { name: '后端', slug: 'backend', description: '后端开发', parentId: null, order: 3 } }),
    prisma.category.create({ data: { name: 'React', slug: 'react', description: 'React 相关', order: 4 } }),
    prisma.category.create({ data: { name: '杂谈', slug: 'misc', description: '生活随笔', order: 5 } }),
    prisma.category.create({ data: { name: '教程', slug: 'tutorial', description: '入门教程', order: 6 } }),
  ]);

  // Make frontend/backend children of tech
  await prisma.category.update({ where: { slug: 'frontend' }, data: { parentId: categories[0].id } });
  await prisma.category.update({ where: { slug: 'backend' }, data: { parentId: categories[0].id } });

  console.log('✅ 分类已创建');

  // Create tags
  const tags = await Promise.all([
    prisma.tag.create({ data: { name: 'Next.js', slug: 'nextjs', color: '#000000' } }),
    prisma.tag.create({ data: { name: 'React', slug: 'react', color: '#61dafb' } }),
    prisma.tag.create({ data: { name: 'TypeScript', slug: 'typescript', color: '#3178c6' } }),
    prisma.tag.create({ data: { name: 'CSS', slug: 'css', color: '#1572b6' } }),
    prisma.tag.create({ data: { name: 'JavaScript', slug: 'javascript', color: '#f7df1e' } }),
    prisma.tag.create({ data: { name: '入门', slug: 'getting-started', color: '#10b981' } }),
    prisma.tag.create({ data: { name: '进阶', slug: 'advanced', color: '#f59e0b' } }),
    prisma.tag.create({ data: { name: '架构', slug: 'architecture', color: '#8b5cf6' } }),
    prisma.tag.create({ data: { name: '博客', slug: 'blog', color: '#ec4899' } }),
    prisma.tag.create({ data: { name: 'Node.js', slug: 'nodejs', color: '#339933' } }),
    prisma.tag.create({ data: { name: '数据库', slug: 'database', color: '#336791' } }),
    prisma.tag.create({ data: { name: 'DevOps', slug: 'devops', color: '#fc6d26' } }),
  ]);
  console.log('✅ 标签已创建');

  // Sample posts data
  const samplePosts = [
    {
      slug: 'hello-world',
      title: 'Hello World — 我的第一篇博客',
      content: `## 为什么开始写博客？

写博客的念头由来已久。作为一个开发者，每天都要面对大量的新知识、新技术和踩过的坑，如果不记录下来，很快就会遗忘。

### 写博客的好处

1. **加深理解** — 教是最好的学，把知识写下来能帮助自己理清思路
2. **积累沉淀** — 技术笔记是开发者最宝贵的资产之一
3. **分享交流** — 帮助他人，也收获反馈

> "Talk is cheap. Show me the code." — Linus Torvalds

## 博客建设目标

这个博客将主要涵盖以下内容：

- 前端技术分享（React / Next.js / TypeScript）
- 后端架构设计
