import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Link from 'next/link';

import { pagesPath } from 'lib/$path';

export default function DrawerContent() {

  return (
    <Box sx={{ width: '100%', minWidth: 240, maxWidth: 240 }}>
      <nav aria-label="secondary mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link href={pagesPath.$url()}>
                  home
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link href={pagesPath.itsme.$url()}>
              profile
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}