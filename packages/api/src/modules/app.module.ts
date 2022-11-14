import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";

import { ArticleModule } from "@/modules/article.module";
import { ImageModule } from "@/modules/image.module";
import { TagModule } from "@/modules/tag.module";
import { DateScalar } from "@/scalars/date.scalar";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
    ArticleModule,
    ImageModule,
    TagModule,
  ],
  controllers: [],
  providers: [DateScalar],
})
export class AppModule {}