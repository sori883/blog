import { Inject } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AddTagInput, UpdateTagInput } from '@/dto/tag.dto';
import { TagModel } from '@/models/tag.model';
import { TagService } from '@/services/tag.service';

@Resolver()
export class TagResolver {
  constructor(@Inject(TagService) private tagService: TagService) {}

  @Query((returns) => TagModel, { nullable: true })
  async tag(@Args('id', { type: () => Int }) id: number) {
    return await this.tagService.findOne(id);
  }

  @Query((returns) => [TagModel])
  async tags() {
    return await this.tagService.findAll();
  }

  @Query((returns) => [TagModel])
  async tagsByIds(@Args('ids', { type: () => [Int] }) ids: [number]) {
    return await this.tagService.findByIds(ids);
  }

  @Mutation((returns) => TagModel)
  async saveTag(@Args('Tag') Tag: AddTagInput) {
    return await this.tagService.save(Tag);
  }

  @Mutation((returns) => TagModel)
  async updateTag(@Args('Tag') Tag: UpdateTagInput) {
    return await this.tagService.save(Tag);
  }

  @Mutation((returns) => TagModel, { nullable: true })
  async deleteTag(@Args('id', { type: () => Int }) id: number) {
    return await this.tagService.delete(id);
  }
}