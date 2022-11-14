import { Field, Int, ObjectType } from '@nestjs/graphql';

import { ArticleModel } from '@/models/article.model';
import { TagModel } from '@/models/tag.model';

@ObjectType()
export class TagsOnArticles {
  @Field((type) => Int)
    articleId!: number;

  @Field((type) => Int)
    tagId!: number;

  @Field((type) => ArticleModel)
    article!: ArticleModel;

  @Field((type) => TagModel)
    tag!: TagModel;
}