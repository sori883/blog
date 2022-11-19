import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage  } from 'next';

import ContentBox from 'components/elements/contentBox/contentBox';
import { Resume, View } from 'components/elements/markdown/markdown';
import TagChip from 'components/elements/tagChip/tagChip';
import SiteHead from 'components/head/siteHead';
import Layout from 'components/layouts/layout';
import { client } from 'graphql/client';
import {
  ArticleBySlugDocument,
  ArticleBySlugQuery,
  ArticleBySlugQueryVariables,
  ArticlesDocument,
  ArticlesQuery,
  ArticlesQueryVariables,
} from 'graphql/generated';

export const getStaticPaths: GetStaticPaths  = async () => {
  const { data } = await client.query<ArticlesQuery, ArticlesQueryVariables>({
    query: ArticlesDocument,
  });
  const paths = data.articles.map((item) => ({ params: {slug: `${item.slug}`}}));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params
}) => {
  if (typeof params?.slug !== 'string') {
    return { notFound: true };
  }
  const { data } = await client.query<ArticleBySlugQuery, ArticleBySlugQueryVariables>({
    query: ArticleBySlugDocument,
    variables: {slug: params.slug }
  });

  return {
    props: {
      fallbackArticle: data
    },
  };
};

const Article: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  fallbackArticle
}) => (
  <>
    <SiteHead />
    <Layout
      containerSize='xl'
    >
      <Grid container spacing={[0, 0, 0, 4]} justifyContent={'center'}>
        <Grid
          item
          xs={12}
          md={12}
          xl={10}
        >
          <ContentBox>
            <Typography variant='h3'>
              {fallbackArticle.articleBySlug.title}
            </Typography>
            <TagChip
              tagsOnArticles={fallbackArticle.articleBySlug.tagsOnArticles}
            />
            <Divider sx={{marginY: 2}} />
            <View
              markdown={fallbackArticle.articleBySlug.entry}
            />
          </ContentBox>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          xl={2}
        >
          <Box sx={{
            bgcolor: 'background.paper',
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            position: 'sticky',
            top: 50,
            display: { xs: 'none', md: 'flex' }
          }}>
            <Resume
              markdown={fallbackArticle.articleBySlug.entry}
            />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  </>
);

export default Article;
