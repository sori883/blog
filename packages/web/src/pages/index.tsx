import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useRouter } from 'next/router';

import ArticleList from 'components/article/ArticlesList';
import SiteHead from 'components/head/siteHead';
import Layout from 'components/layouts/layout';
import { client } from 'graphql/client';
import { ArticlesDocument, ArticlesQuery, ArticlesQueryVariables } from 'graphql/generated';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const defaultPage: number = context.query.page ? Number(context.query.page) : 0;
  // スキップ算出くん
  const skipContents = defaultPage === 0 ? 0 : (defaultPage - 1) * 9;
  
  const { data } = await client.query<ArticlesQuery, ArticlesQueryVariables>({
    query: ArticlesDocument,
    variables: {take: 9, skip: skipContents }
  });

  return {
    props: {
      initialData: data
    },
  };
};

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  initialData
}) => {
  const router = useRouter();
  const handleOnChange = (event: React.ChangeEvent<unknown>, page: number) => {
    router.push({
      query: { page: page }
    });
  };

  return (
    <div>
      <SiteHead />
      <Layout>
        <ArticleList
          fallbackArticle={initialData.articles}
        />
        <Box display='flex' justifyContent='center'>
          <Pagination
            onChange={handleOnChange}
            count={ Math.ceil(initialData.articleCount / 20)}
          />
        </Box>
      </Layout>
    </div>
  );
};


export default Home;