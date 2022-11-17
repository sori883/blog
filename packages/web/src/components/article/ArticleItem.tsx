import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import TagChip from 'components/elements/tagChip/tagChip';
import { ArticlesQuery } from 'graphql/generated';
import { pagesPath } from 'lib/$path';
import { imageLoader } from 'lib/ImageLoader';
import parseValue from 'lib/dataformat';

type Props = {
  article: ArticlesQuery['articles'][number];
}


export default function ArticleItem({ article }: Props): JSX.Element {

  return (
    <>
      <Card
        sx={{ maxWidth: 400, minWidth: 400}}
      >
        <Link href={pagesPath.posts._slug(article.slug).$url()}>
          <CardActionArea>
            <CardMedia
              component='img'
              height='140'
              image={imageLoader({
                src: 'images/test/ss.43.jpg', 
                width: 100
              })} // TODO:指定はこれ{article.image.path}
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                { article.title }
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                <TagChip 
                  tagsOnArticles={article.tagsOnArticles}
                />
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                { parseValue(article.createdAt) }
              </Typography>
            </CardContent>
          </CardActionArea>
        </Link>
      </Card>
    </>
  );
}