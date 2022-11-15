import { Inject } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AddArticleInput, PaginationArtricleInput, UpdateArticleInput } from '@/dto/article.dto';
import { ArticleModel } from '@/models/article.model';
import { ArticleService } from '@/services/article.service';

@Resolver()
export class ArticleResolver {
  constructor(@Inject(ArticleService) private articleService: ArticleService) {}

  @Query((returns) => ArticleModel, { nullable: true })
  async article(@Args('id', { type: () => Int }) id: number) {
    return await this.articleService.findOne(id);
  }

  @Query((returns) => ArticleModel, { nullable: true })
  async articleBySlug(@Args('slug', { type: () => String }) slug: string) {
    return await this.articleService.findBySlug(slug);
  }

  @Query((returns) => [ArticleModel])
  async articles(@Args('pagination') paginationArg: PaginationArtricleInput) {
    return await this.articleService.findAll(paginationArg);
  }

  @Query((returns) => Int)
  async articleCount() {
    return this.articleService.getArticleCount();
  }

  @Mutation((returns) => ArticleModel)
  async saveArticle(@Args('article') article: AddArticleInput) {
    return await this.articleService.save(article);
  }

  @Mutation((returns) => ArticleModel)
  async updateArticle(@Args('article') article: UpdateArticleInput) {
    return await this.articleService.update(article);
  }

  @Mutation((returns) => ArticleModel, { nullable: true })
  async deleteArticle(@Args('id', { type: () => Int }) id: number) {
    return await this.articleService.delete(id);
  }
}