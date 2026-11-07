    const comment1 = await prisma.comment.create({
      data: {
        postId: posts[0].id,
        author: '张三',
        email: 'zhangsan@example.com',
        content: '写得很棒！期待更多内容。',
        html: '<p>写得很棒！期待更多内容。</p>',
        status: 'approved',
      },
    });

    await prisma.comment.create({
      data: {
        postId: posts[0].id,
        parentId: comment1.id,
        author: 'Admin',
        email: 'admin@example.com',
        content: '感谢支持！会持续更新的。',
        html: '<p>感谢支持！会持续更新的。</p>',
        status: 'approved',
        authorId: admin.id,
      },
    });

    await prisma.comment.create({
      data: {
        postId: posts[0].id,
        author: '李四',
        email: 'lisi@example.com',
        content: '很好的文章，收藏了！',
        html: '<p>很好的文章，收藏了！</p>',
        status: 'pending',
      },
    });
  }
  console.log('✅ 评论已创建');

  // Create site settings
  await prisma.siteSetting.createMany({
    data: [
      { key: 'title', value: 'Personal Blog' },
      { key: 'description', value: '个人技术博客，分享编程、技术与生活感悟。' },
      { key: 'seoDescription', value: '个人技术博客，专注于 React、Next.js、TypeScript 等前端技术分享。' },
      { key: 'keywords', value: '技术博客,前端,React,Next.js,TypeScript,编程' },
    ],
  });
  console.log('✅ 站点设置已创建');

  // Create friend links
  await prisma.friendLink.createMany({
    data: [
      { name: 'Next.js', url: 'https://nextjs.org', description: 'Next.js 官方文档', isActive: true },
      { name: 'React', url: 'https://react.dev', description: 'React 官方文档', isActive: true },
    ],
  });
  console.log('✅ 友链已创建');

  console.log('\n🎉 数据播种完成!');
  console.log('📧 管理员: admin@example.com / admin123');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());