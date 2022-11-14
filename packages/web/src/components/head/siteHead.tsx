import getConfig from "next/config";
import Head from 'next/head';
import { useRouter } from "next/router";

type Props = {
  title?: string;
  description?: string;
  image?: string;
}

const { publicRuntimeConfig } = getConfig();

export default function SiteHead({ 
  title = 'blog title',
  description = 'blog description',
  image = 'test.png'
}: Props): JSX.Element {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta charSet='utf-8' />
      <meta name='description' content={description.substring(0, 100)} />
      <meta property='og:site_name' content='blog title' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description.substring(0, 100)} />
      <meta property='og:url' content={router.pathname} />
      <meta property='og:type' content='article' />
      <meta property='og:image' content={image} />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content={`@${publicRuntimeConfig.TWITTER_ID}`} />
      {/* <meta name='fb:app_id' content={publicRuntimeConfig.FBAPP_ID /> */}
    </Head>
  );
}


