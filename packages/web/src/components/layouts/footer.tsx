import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { pagesPath } from 'lib/$path';

export default function Footer() {
  return (
    <>
      <Typography variant='body2' color='textSecondary' align='center'>
        <Link href='https://github.com/sori883'>
          <GitHubIcon
            sx={{marginX: '0.5rem',}}
          />
        </Link>
        <Link href='https://twitter.com/sorinaji'>
          <TwitterIcon
            sx={{marginX: '0.5rem',}}
          />
        </Link>
      </Typography>
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