import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AddImageInput {
  @Field()
    name!: string;
  @Field()
    path!: string;
}

@InputType()
export class UpdateImageInput {
  @Field()
    name!: string;
  @Field()
    path!: string;
}