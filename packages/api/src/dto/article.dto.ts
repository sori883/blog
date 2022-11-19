import { Field, ID, InputType, Int,} from '@nestjs/graphql';
import { Max, Min } from 'class-validator';


@InputType()
export class PaginationArtricleInput {
  @Field(() => Int)
  @Min(0)
    skip = 0;

  @Field(() => Int)
  @Min(1)
  @Max(50)
    take = 25;
}

@InputType()
export class AddArticleInput {
  @Field()
    title!: string;
  @Field()
    entry!: string;
  @Field() 
    slug!: string;
  @Field()
    published!: boolean;
  @Field((type) => String, {nullable:true})
    imagePath!: string;

  @Field((type) => [String])
    tagNames!: string[];
}

@InputType()
export class UpdateArticleInput {
  @Field()
    title!: string;
  @Field()
    entry!: string;
  @Field()
    slug!: string;
  @Field()
    published!: boolean;
  @Field((type) => String, {nullable:true})
    imagePath!: string;

  @Field((type) => [String])
    tagNames!: string[];
}