import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ArticleModel } from '@/models/article.model'; 

@ObjectType()
export class ImageModel {
  @Field(() => ID)
    id!: number;
  name!: string;
  path!: string;
  createdAt!: Date;
  updatedAt!: Date;

  
  @Field((type) => [ArticleModel])
    article!: ArticleModel[];
}