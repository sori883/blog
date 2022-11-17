import Divider from '@mui/material/Divider';
import type { NextPage } from 'next';
import getConfig from "next/config";
import Image from 'next/image';
import Link from 'next/link';

import ContentBox from 'components/elements/contentBox/contentBox';
import SiteHead from 'components/head/siteHead';
import Layout from 'components/layouts/layout';
import { imageLoader } from 'lib/ImageLoader';


const ItsMe: NextPage = () => (
  <div>
    <SiteHead
      title='profile'
      description='about me'
    />
    <Layout containerSize='lg'>
      <ContentBox>
        <h2>自己紹介！</h2>
        <Divider />
        <p></p>
      </ContentBox>
    </Layout>
  </div>
);


export default ItsMe;