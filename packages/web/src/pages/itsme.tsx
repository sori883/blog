import { css } from "@emotion/react";
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import ContentBox from 'components/elements/contentBox/contentBox';
import SiteHead from 'components/head/siteHead';
import Layout from 'components/layouts/layout';


const ItsMe: NextPage = () => (
  <div>
    <SiteHead
      title='profile'
      description='about me'
    />
    <Layout containerSize='lg'>
      <ContentBox>
        <Box
          sx={{display: 'flex'}}
        >
          <Image
            src='/test.png'
            width='60'
            height='60'
            alt='icon'
            css={css`
            &&& {
              border-radius: 50%;
              margin-right: 1.5rem;
            }
          `}
          />
          <Box>
            <Typography variant='h5' component={'h5'} sx={{fontWidth: 700}}>
              Sorinaji
            </Typography>
            <Typography variant='body1' component={'h6'}>
              <Link href='https://twitter.com/sorinaji' target='_blank'>
              @sorinaji
              </Link>
            </Typography>
          </Box>
        </Box>
        <Divider
          sx={{marginY: 1}}
        />
        <Typography variant='h6' component={'h6'}>
            Account
        </Typography>
        <Typography variant='body1' component={'p'}>
          <Link href='https://twitter.com/sorinaji' target='_blank'>
            Twitter
          </Link>
        </Typography>
        <Typography variant='body1' component={'p'}>
          <Link href='https://github.com/sori883' target='_blank'>
            GitHub
          </Link>
        </Typography>
        <Divider
          sx={{marginTop: 3, marginBottom: 1}}
        />
        <Typography variant='h6' component={'h6'}>
            About
        </Typography>
        <Typography variant='body1' component={'p'}>
          ぼくどらえもん
        </Typography>
        <Divider
          sx={{marginTop: 3, marginBottom: 1}}
        />
        <Typography variant='h6' component={'h6'}>
            Job
        </Typography>
        <Typography variant='body1' component={'p'}>
          Backend Engineer
        </Typography>
        <Divider
          sx={{marginTop: 3, marginBottom: 1}}
        />
        <Typography variant='h6' component={'h6'}>
            illustration
        </Typography>
        <Typography variant='body1' component={'p'}>
          熊田様
        </Typography>
      </ContentBox>
    </Layout>
  </div>
);


export default ItsMe;