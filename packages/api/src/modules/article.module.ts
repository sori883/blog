import { Module, forwardRef } from '@nestjs/common';

import { TagModule } from '@/modules/tag.module';
import { ArticleResolver } from '@/resolvers/article.resolver';
import { ArticleService } from '@/services/article.service';
import { PrismaService } from '@/services/prisma.service';

@Module({
  imports: [forwardRef(() => TagModule)],
  providers: [ArticleService, ArticleResolver, PrismaService],
  exports: [ArticleService],
})
export class ArticleModule {}