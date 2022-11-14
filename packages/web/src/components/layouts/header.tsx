import { css } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { pagesPath } from 'lib/$path';

export default function Header({
  ...props
}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{boxShadow: 0}}
        position='static'
        css={css`
        &&& {
          padding-top: 2rem;
          padding-bottom: 2rem;
        }
    `}
      >
        <Toolbar>
          <Typography align='center' variant='h2' component='div' sx={{ flexGrow: 1 }}>
            <Link href={pagesPath.$url()}>
              Blog Title
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}