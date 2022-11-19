import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import TagChip from 'components/elements/tagChip/tagChip';
import { ArticlesQuery } from 'graphql/generated';
import { pagesPath } from 'lib/$path';
import parseValue from 'lib/dataformat';

type Props = {
  article: ArticlesQuery['articles'][number];
}


export default function ArticleItem({ article }: Props): JSX.Element {

  return (
    <>
      <Card
        sx={{ maxWidth: 400, minWidth: {md: 400, xs: 350}, height: 230 }}
      >
        <Link href={pagesPath.posts._slug(article.slug).$url()}>
          <CardActionArea
            sx={{ width: '100%', height: '100%', display: 'flex', flexFlow: 'column'}}
          >
            <CardContent sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography gutterBottom variant='h5' component='h5' sx={{ width: '100%', fontWeight: 700, verticalAlign: 'middle' }}>
                { article.title }
              </Typography>
            </CardContent>
            <CardContent sx={{ width: '100%' }}>
              <Typography variant='body2' color='text.secondary' component='div' sx={{ marginBottom: 1 }}>
                <TagChip 
                  tagsOnArticles={article.tagsOnArticles}
                />
              </Typography>
              <Typography variant='body2' color='text.secondary' component='div'>
                投稿日：{ parseValue(article.createdAt) }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}