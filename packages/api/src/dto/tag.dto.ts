import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class AddTagInput {
  @Field()
    name!: string;

}

@InputType()
export class UpdateTagInput {
  @Field((type) => ID)
    id!: number;
  @Field()
    name!: string;
}