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

  async save({ tagIds, ...payload }: AddArticleInput) {
    return await this.prisma.article.create({
      data: {
        ...payload,
        tagsOnArticles: {
          createMany: { data: tagIds.map((tagId) => ({ tagId })) },
        },
      },
    });
  }

  async update({ slug, tagIds, ...data }: UpdateArticleInput) {
    return await this.prisma.article.update({ where: { slug: slug }, data: {
      ...data,
      tagsOnArticles: {
        createMany: { data: tagIds.map((tagId) => ({ tagId })) },
      },
    }, });
  }

  async delete(id: number) {
    return await this.prisma.article.delete({ where: { id } });
  }
}