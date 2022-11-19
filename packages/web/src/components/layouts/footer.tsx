import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { pagesPath } from 'lib/$path';

export default function Footer() {
  return (
    <Box
      sx={{
        minWidth: '100%',
      }}
    >
      <Typography variant='body2' color='textSecondary' align='center'>
        <Link href='https://github.com/sori883' target='_blank'>
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
        <Link href={pagesPath.about.$url()} target='_blank'>
          プライバシーポリシー
        </Link>
      </Typography>
      <Typography variant='body2' color='textSecondary' align='center'>
        {`Copyright © blog ${new Date().getFullYear()} .`}
      </Typography>
    </Box>
  );
}