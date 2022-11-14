import { Injectable } from '@nestjs/common';

import { AddImageInput, UpdateImageInput } from '@/dto/image.dto';
import { PrismaService } from '@/services/prisma.service';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number) {
    return await this.prisma.image.findUnique({ where: { id } });
  }

  async findAll() {
    return await this.prisma.image.findMany({ include: { article: true } });
  }

  async findByIds(ids: number[]) {
    return await this.prisma.image.findMany({ where: { id: { in: ids } } });
  }

  async save(payload: AddImageInput) {
    return await this.prisma.image.create({ data: payload });
  }

  async update({ path, ...data }: UpdateImageInput) {
    return await this.prisma.image.update({ where: { path: path }, data });
  }

  async delete(id: number) {
    return await this.prisma.image.delete({ where: { id } });
  }
}