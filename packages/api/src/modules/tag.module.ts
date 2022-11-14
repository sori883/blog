import { Module } from '@nestjs/common';

import { TagResolver } from '@/resolvers/tag.resolver';
import { PrismaService } from '@/services/prisma.service';
import { TagService } from '@/services/tag.service';


@Module({
  imports: [],
  providers: [TagService, TagResolver, PrismaService],
  exports: [TagService],
})
export class TagModule {}