  const db = await connectDB();
  return db.query('SELECT * FROM posts');
}
\`\`\`

## 最佳实践

- 尽可能使用 Server Components
- 只在需要交互时使用 'use client'
- 合理使用 Suspense 边界

## 总结

RSC 代表了 React 的演进方向，值得每个 React 开发者深入学习。`,
      tags: ['React', 'Next.js', '架构', '进阶'],
      category: 'React',
      featured: true,
    },
  ];

  // Create posts
  for (const postData of samplePosts) {
    const { html, wordCount, readingTime } = await renderMarkdown(postData.content);
    const excerpt = extractExcerpt(postData.content);
    const category = categories.find(c => c.name === postData.category);
    const postTags = tags.filter(t => postData.tags.includes(t.name));

    const post = await prisma.post.create({
      data: {
        slug: postData.slug,
        title: postData.title,
        content: postData.content,
        html,
        excerpt,
        coverImage: '',
        categoryId: category?.id || null,
        status: 'published',
        isFeatured: postData.featured,
        wordCount,
        readingTime,
        publishedAt: new Date(),
        authorId: admin.id,
        tags: {
          create: postTags.map(tag => ({ tagId: tag.id })),
        },
      },
    });

    // Update tag counts
    for (const tag of postTags) {
      await prisma.tag.update({ where: { id: tag.id }, data: { postCount: { increment: 1 } } });
    }

    // Update category count
    if (category) {
      await prisma.category.update({ where: { id: category.id }, data: { postCount: { increment: 1 } } });
    }

    console.log(`  📝 文章: ${post.title}`);
  }

  // Create sample comments
  const posts = await prisma.post.findMany();
  if (posts.length > 0) {
