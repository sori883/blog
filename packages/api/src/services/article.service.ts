import { Injectable } from '@nestjs/common';

import { AddArticleInput, PaginationArtricleInput, UpdateArticleInput } from '@/dto/article.dto';
import { PrismaService } from '@/services/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async getArticleCount() {
    const count = await this.prisma.article.count();
    return count;
  }

  async findOne(id: number) {
    return await this.prisma.article.findUnique({
      where: { id },
      include: {
        image: true,
        tagsOnArticles: {
          include: { tag: true },
        },
      },
    });
  }

  async findBySlug(slug: string) {
    return await this.prisma.article.findUnique({
      where: { slug: slug },
      include: {
        image: true,
        tagsOnArticles: {
          include: { tag: true },
        },
      },
    });
  }

  async findAll({skip = 0, take = 25}: PaginationArtricleInput) {
    return await this.prisma.article.findMany({
      orderBy: { createdAt: 'desc' },
      skip: skip,
      take: take,
      include: {
        image: true,
        tagsOnArticles: {
          include: { tag: true },
        },
      },
    });
  }

  async save({ tagNames, imagePath,  ...payload }: AddArticleInput) {
    // イメージ取得
    const image = await this.prisma.image.findUnique({
      where: { path: imagePath }
    });
    
    // タグ取得しつつ作る
    const tagUpsertMany = tagNames.map((tagName) => (
      this.prisma.tag.upsert({
        where: {
          name: tagName,
        },
        update: {},
        create: {
          name: tagName
        },
      })
    ));

    // 作成したタグたち
    const tags = await this.prisma.$transaction([...tagUpsertMany]);

    return await this.prisma.article.create({
      data: {
        ...payload,
        imageId: image.id,
        tagsOnArticles: {
          createMany: { data: tags.map((tag) => ({ tagId: tag.id })) },
        },
      },
    });
  }

  async update({ tagNames, imagePath, slug, ...data }: UpdateArticleInput) {
    // イメージ取得
    const image = await this.prisma.image.findUnique({
      where: { path: imagePath }
    });
    
    // タグ取得しつつ作る
    const tagUpsertMany = tagNames.map((tagName) => (
      this.prisma.tag.upsert({
        where: {
          name: tagName,
        },
        update: {},
        create: {
          name: tagName
        },
      })
    ));

    // 作成したタグたち
    const tags = await this.prisma.$transaction([...tagUpsertMany]);
    
    return await this.prisma.article.update({ where: { slug: slug }, data: {
      ...data,
      slug: slug,
      imageId: image.id,
      tagsOnArticles: {
        createMany: { data: tags.map((tag) => ({ tagId: tag.id })) },
      },
    }, });
  }

  async delete(id: number) {
    return await this.prisma.article.delete({ where: { id } });
  }
}