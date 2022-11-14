import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const article = async () => {
  const image = await prisma.image.findFirst();

  await prisma.article.createMany({
    data: Array(60)
      .fill(0)
      .map((v, i) => ({
        title: 'test' + i.toString(),
        entry: 'test' + i.toString(),
        slug: 'slug' + i.toString(),
        imageId: image.id,
      })),
  });
};