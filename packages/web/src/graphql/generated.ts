import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: number;
};

export type AddArticleInput = {
  entry: Scalars['String'];
  imageId: Scalars['Int'];
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  tagIds: Array<Scalars['Int']>;
  title: Scalars['String'];
};

export type AddImageInput = {
  name: Scalars['String'];
  path: Scalars['String'];
};

export type AddTagInput = {
  name: Scalars['String'];
};

export type ArticleModel = {
  createdAt: Scalars['Date'];
  entry: Scalars['String'];
  id: Scalars['ID'];
  image: ImageModel;
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  tagsOnArticles: Array<TagsOnArticles>;
  title: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type ImageModel = {
  article: Array<ArticleModel>;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  path: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type Mutation = {
  deleteArticle?: Maybe<ArticleModel>;
  deleteImage?: Maybe<ImageModel>;
  deleteTag?: Maybe<TagModel>;
  saveArticle: ArticleModel;
  saveImage: ImageModel;
  saveTag: TagModel;
  updateArticle: ArticleModel;
  updateImage: ImageModel;
  updateTag: TagModel;
};


export type MutationDeleteArticleArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteImageArgs = {
  id: Scalars['Int'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int'];
};


export type MutationSaveArticleArgs = {
  article: AddArticleInput;
};


export type MutationSaveImageArgs = {
  image: AddImageInput;
};


export type MutationSaveTagArgs = {
  Tag: AddTagInput;
};


export type MutationUpdateArticleArgs = {
  article: UpdateArticleInput;
};


export type MutationUpdateImageArgs = {
  image: UpdateImageInput;
};


export type MutationUpdateTagArgs = {
  Tag: UpdateTagInput;
};

export type PaginationArtricleInput = {
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  article?: Maybe<ArticleModel>;
  articleBySlug?: Maybe<ArticleModel>;
  articleCount: Scalars['Int'];
  articles: Array<ArticleModel>;
  image?: Maybe<ImageModel>;
  images: Array<ImageModel>;
  imagesByIds: Array<ImageModel>;
  tag?: Maybe<TagModel>;
  tags: Array<TagModel>;
  tagsByIds: Array<TagModel>;
};


export type QueryArticleArgs = {
  id: Scalars['Int'];
};


export type QueryArticleBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryArticlesArgs = {
  pagination: PaginationArtricleInput;
};


export type QueryImageArgs = {
  id: Scalars['Int'];
};


export type QueryImagesByIdsArgs = {
  ids: Array<Scalars['Int']>;
};


export type QueryTagArgs = {
  id: Scalars['Int'];
};


export type QueryTagsByIdsArgs = {
  ids: Array<Scalars['Int']>;
};

export type TagModel = {
  article: ArticleModel;
  createdAt: Scalars['Date'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['Date'];
};

export type TagsOnArticles = {
  article: ArticleModel;
  articleId: Scalars['Int'];
  tag: TagModel;
  tagId: Scalars['Int'];
};

export type UpdateArticleInput = {
  entry: Scalars['String'];
  id: Scalars['ID'];
  imageId: Scalars['Int'];
  published: Scalars['Boolean'];
  slug: Scalars['String'];
  tagIds: Array<Scalars['Int']>;
  title: Scalars['String'];
};

export type UpdateImageInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
  path: Scalars['String'];
};

export type UpdateTagInput = {
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ArticlesQueryVariables = Exact<{
  take?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type ArticlesQuery = { articleCount: number, articles: Array<{ id: string, title: string, entry: string, slug: string, published: boolean, createdAt: number, updatedAt: number, image: { id: string, name: string, path: string, createdAt: number, updatedAt: number }, tagsOnArticles: Array<{ tag: { id: string, name: string, createdAt: number, updatedAt: number } }> }> };

export type ArticleBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type ArticleBySlugQuery = { articleBySlug?: { id: string, title: string, entry: string, slug: string, published: boolean, createdAt: number, updatedAt: number, image: { id: string, name: string, path: string, createdAt: number, updatedAt: number }, tagsOnArticles: Array<{ tag: { id: string, name: string, createdAt: number, updatedAt: number } }> } | null };

export type ImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ImagesQuery = { images: Array<{ id: string, name: string, path: string }> };

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { tags: Array<{ id: string, name: string, createdAt: number, updatedAt: number }> };


export const ArticlesDocument = gql`
    query articles($take: Int, $skip: Int) {
  articles(pagination: {take: $take, skip: $skip}) {
    id
    title
    entry
    slug
    published
    createdAt
    updatedAt
    image {
      id
      name
      path
      createdAt
      updatedAt
    }
    tagsOnArticles {
      tag {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
  articleCount
}
    `;

/**
 * __useArticlesQuery__
 *
 * To run a query within a React component, call `useArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticlesQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useArticlesQuery(baseOptions?: Apollo.QueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
      }
export function useArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticlesQuery, ArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, options);
        }
export type ArticlesQueryHookResult = ReturnType<typeof useArticlesQuery>;
export type ArticlesLazyQueryHookResult = ReturnType<typeof useArticlesLazyQuery>;
export type ArticlesQueryResult = Apollo.QueryResult<ArticlesQuery, ArticlesQueryVariables>;
export const ArticleBySlugDocument = gql`
    query articleBySlug($slug: String!) {
  articleBySlug(slug: $slug) {
    id
    title
    entry
    slug
    published
    createdAt
    updatedAt
    image {
      id
      name
      path
      createdAt
      updatedAt
    }
    tagsOnArticles {
      tag {
        id
        name
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useArticleBySlugQuery__
 *
 * To run a query within a React component, call `useArticleBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useArticleBySlugQuery(baseOptions: Apollo.QueryHookOptions<ArticleBySlugQuery, ArticleBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleBySlugQuery, ArticleBySlugQueryVariables>(ArticleBySlugDocument, options);
      }
export function useArticleBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleBySlugQuery, ArticleBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleBySlugQuery, ArticleBySlugQueryVariables>(ArticleBySlugDocument, options);
        }
export type ArticleBySlugQueryHookResult = ReturnType<typeof useArticleBySlugQuery>;
export type ArticleBySlugLazyQueryHookResult = ReturnType<typeof useArticleBySlugLazyQuery>;
export type ArticleBySlugQueryResult = Apollo.QueryResult<ArticleBySlugQuery, ArticleBySlugQueryVariables>;
export const ImagesDocument = gql`
    query images {
  images {
    id
    name
    path
  }
}
    `;

/**
 * __useImagesQuery__
 *
 * To run a query within a React component, call `useImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useImagesQuery(baseOptions?: Apollo.QueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
      }
export function useImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
        }
export type ImagesQueryHookResult = ReturnType<typeof useImagesQuery>;
export type ImagesLazyQueryHookResult = ReturnType<typeof useImagesLazyQuery>;
export type ImagesQueryResult = Apollo.QueryResult<ImagesQuery, ImagesQueryVariables>;
export const TagsDocument = gql`
    query tags {
  tags {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;