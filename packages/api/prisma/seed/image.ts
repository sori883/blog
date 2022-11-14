import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const image = async () => {
  await prisma.image.createMany({
    data: Array(10)
      .fill(0)
      .map((v, i) => ({
        name: 'test' + i.toString(),
        path: 'path' + i.toString(),
      })),
  });
};