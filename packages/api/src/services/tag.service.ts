
import { Injectable } from '@nestjs/common';

import { AddTagInput, UpdateTagInput } from '@/dto/tag.dto';
import { PrismaService } from '@/services/prisma.service';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number) {
    return await this.prisma.tag.findUnique({ where: { id } });
  }

  async findAll() {
    return await this.prisma.tag.findMany({
      include: {
        tagsOnArticles: { include: { article: true } },
      },
    });
  }

  async findByIds(ids: number[]) {
    return await this.prisma.tag.findMany({ where: { id: { in: ids } } });
  }

  async save(payload: AddTagInput) {
    return await this.prisma.tag.create({ data: payload });
  }

  async update({ id, ...data }: UpdateTagInput) {
    return await this.prisma.tag.update({ where: { id }, data });
  }

  async delete(id: number) {
    return await this.prisma.tag.delete({ where: { id } });
  }
}