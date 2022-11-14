import { css } from '@emotion/react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import ArticleItem from 'components/article/ArticleItem';
import { ArticlesQuery } from 'graphql/generated';


type Props = {
  fallbackArticle: ArticlesQuery['articles'];
}

export default function ArticleList({ fallbackArticle }: Props): JSX.Element {
  return (
    <>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        { 
          fallbackArticle.map((item) => (
            <Grid
              item
              key={item.id}
              xs={12}
              md={6}
              xl={4}
              css={css`
              &&& {
                margin-bottom: 3rem;
              }
          `}
            >
              <Box display='flex' justifyContent='center'>
                <ArticleItem
                  key={item.id}
                  article={item}
                />
              </Box>
            </Grid>
          ))
        }
      </Grid>
    </>
  );
}