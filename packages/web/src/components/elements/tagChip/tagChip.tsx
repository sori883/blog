import TagIcon from '@mui/icons-material/Tag';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

import { ArticlesQuery, TagsOnArticles } from 'graphql/generated';

type Props = {
  // TODO:なんかイケてる。。？
  tagsOnArticles: ArticlesQuery['articles'][number]['tagsOnArticles'] | Array<TagsOnArticles>;
}


export default function TagChip({tagsOnArticles}: Props): JSX.Element {
  return (
    <>
      <Stack direction="row" spacing={1}>
        {
          tagsOnArticles.map((item) => (
            <Chip size='small' key={item.tag.id} icon={<TagIcon />} label={item.tag.name} />
          ))
        }
      </Stack>
    </>
  );
}