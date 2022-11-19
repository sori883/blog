import { Inject } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AddImageInput, UpdateImageInput } from '@/dto/image.dto';
import { ImageModel } from '@/models/image.model';
import { ImageService } from '@/services/image.service';

@Resolver()
export class ImageResolver {
  constructor(@Inject(ImageService) private imageService: ImageService) {}

  @Query((returns) => ImageModel, { nullable: true })
  async image(@Args('id', { type: () => Int }) id: number) {
    return await this.imageService.findOne(id);
  }

  @Query((returns) => [ImageModel])
  async images() {
    return await this.imageService.findAll();
  }

  @Query((returns) => [ImageModel])
  async imagesByIds(@Args('ids', { type: () => [Int] }) ids: [number]) {
    return await this.imageService.findByIds(ids);
  }

  @Mutation((returns) => ImageModel)
  async saveImage(@Args('image') image: AddImageInput) {
    return await this.imageService.save(image);
  }

  @Mutation((returns) => ImageModel)
  async updateImage(@Args('image') image: UpdateImageInput) {
    return await this.imageService.update(image);
  }

  @Mutation((returns) => ImageModel, { nullable: true })
  async deleteImage(@Args('id', { type: () => Int }) id: number) {
    return await this.imageService.delete(id);
  }
}