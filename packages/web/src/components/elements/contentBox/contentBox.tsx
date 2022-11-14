import { ReactNode } from 'react';

import Box from '@mui/material/Box';

type Props = {
  children: ReactNode;
}

export default function ContentBox({children}:Props): JSX.Element {
  return (
    <Box  sx={{
      bgcolor: 'background.paper',
      boxShadow: 1,
      borderRadius: 2,
      p: 2,
    }}>
      { children }
    </Box>
  );
}