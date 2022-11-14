import { Field, ID, ObjectType } from '@nestjs/graphql';

import { ImageModel } from '@/models/image.model';
import { TagsOnArticles } from '@/models/tagsOnArticles.model';

@ObjectType()
export class ArticleModel {
  @Field(() => ID)
    id!: number;
  @Field()
    title!: string;
  @Field()
    entry!: string;
  @Field()
    slug!: string;
  @Field()
    published!: boolean;
  @Field()
    createdAt!: Date;
  @Field()
    updatedAt!: Date;

  @Field((type) => ImageModel)
    image!: ImageModel;

  @Field((type) => [TagsOnArticles])
    tagsOnArticles!: TagsOnArticles[];
}