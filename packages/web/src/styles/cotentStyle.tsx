import { ReactNode } from 'react';

import { css } from '@emotion/react';
import Box from '@mui/material/Box';

type Props = {
  children: ReactNode;
}

export default function ContentStyle({children}: Props): JSX.Element {
  return (
    <Box 
      css={css`
          a {
            color: #4b75b9;
          }
          table {
            overflow: auto;
            border-collapse: collapse;
          }
          
          table{
            margin-top: 0;
            margin-bottom: 16px;
          }
          
          table {
            border-spacing: 0;
            border-collapse: collapse;
          }
          
          td,
          th {
            padding: 0;
          }
          
          table th {
            font-weight: 600;
            background-color: #e7e7e7;
          }
          
          table thead th,
          table thead td {
            padding: 6px 13px;
            text-align: center;
          }
          
          table th,
          table td {
            padding: 6px 13px;
            text-align: center;
            border: 1px solid #ccc
          }
          
          table thead tr th {
            border: 1px solid #ccc;
          }
          
          table tbody tr + tr td {
            border: 1px solid #ccc;
          }
          
          table tr {
            background-color: #fff;
          }
          
          table tr:nth-child(2n) {
            background-color: #f6f8fa;
          }
          
    `}
    >
      { children }
    </Box>
  );
}