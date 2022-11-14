import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ArticleModel } from '@/models/article.model';

@ObjectType()
export class TagModel {
  @Field(() => ID)
    id!: number;
  @Field()
    name!: string;
  @Field()
    createdAt!: Date;
  @Field()
    updatedAt!: Date;

  @Field((type) => ArticleModel)
    article!: ArticleModel[];
}