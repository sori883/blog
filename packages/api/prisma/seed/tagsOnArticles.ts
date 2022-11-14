import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const tagsOnArticles = async () => {
  const articles = await prisma.article.findMany();
  const tags = await prisma.tag.findMany();
 
  for (const article of articles) {
    for (const tag of tags) {
      await prisma.tagsOnArticles.create({
        data: {
          articleId: article.id,
          tagId: tag.id
        },
      });
    }
  }
};