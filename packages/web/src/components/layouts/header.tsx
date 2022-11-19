import { useState } from 'react';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import DrawerContent from 'components/layouts/drawerContent';
import { pagesPath } from 'lib/$path';

export default function Header() {
  const [drawerOpened, setDrawerOpened] = useState(false);

  return (
    <>
      <Box sx={{ flexGrow: { md: 1 } }}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{
              mr: 5,
              color: 'inherit',
              textDecoration: 'none',
              flexGrow: { xl: 0, xs: 1} 
            }}>
              <Link href={pagesPath.$url()}>
                blog title
              </Link>
            </Typography>
            <Box
              sx={{ display: { xl : 'flex', xs: 'none'} }}
            >
              <Typography textAlign='center' variant='subtitle1' component='p' sx={{ mr: 3 }}>
                <Link href={pagesPath.$url()}>
                  home
                </Link>
              </Typography>
              <Typography textAlign='center' variant='subtitle1' component='p' sx={{ mr: 3 }}>
                <Link href={pagesPath.itsme.$url()}>
                  profile
                </Link>
              </Typography>
            </Box>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ display: { xl : 'none'}, mr: 2 }}
              onClick={() => setDrawerOpened(true)}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <Drawer
        anchor={'right'}
        open={drawerOpened}
        onClose={() => setDrawerOpened(false)}>
        <DrawerContent />
      </Drawer>
    </>
  );
}