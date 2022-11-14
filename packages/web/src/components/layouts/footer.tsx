import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { pagesPath } from 'lib/$path';

export default function Footer() {
  return (
    <>
      <Typography variant='body2' color='textSecondary' align='center'>
        <Link href={pagesPath.about.$url()}>
          このサイトについて
        </Link>
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        {`Copyright © blog ${new Date().getFullYear()} .`}
      </Typography>
    </>
  );
}