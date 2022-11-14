import { Module, forwardRef } from "@nestjs/common";

import { ArticleModule } from "@/modules/article.module";
import { ImageResolver } from "@/resolvers/image.resolver";
import { ImageService } from "@/services/image.service";
import { PrismaService } from "@/services/prisma.service";

@Module({
  imports: [forwardRef(() => ArticleModule)],
  providers: [ImageService, ImageResolver, PrismaService],
  exports: [ImageService],
})
export class ImageModule {}