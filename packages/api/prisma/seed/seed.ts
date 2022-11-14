import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { article } from './article';
import { image } from './image';
import { tag } from './tag';
import { tagsOnArticles } from './tagsOnArticles';

async function main() {
  await prisma.tagsOnArticles.deleteMany();
  await prisma.article.deleteMany();
  await prisma.image.deleteMany();
  await prisma.tag.deleteMany();

  await image();
  await tag();
  await article();
  await tagsOnArticles();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });