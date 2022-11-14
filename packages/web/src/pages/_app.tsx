import { useEffect } from 'react';

import { ApolloProvider } from '@apollo/client';
import { CacheProvider, EmotionCache } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import type { AppProps } from 'next/app';
import nprogress from 'nprogress';

import { client } from 'graphql/client';
import createEmotionCache from 'mui/createEmotionCache';
import theme from 'mui/theme';

import 'styles/globals.css';

const clientSideEmotionCache = createEmotionCache();
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
nprogress.configure({ showSpinner: false, speed: 400, minimum: 0.25 });

function AppInit():null {
  // 画面遷移プログレス開始
  if (process.browser) {
    nprogress.start();
  }
  // 画面遷移プログレス終了
  useEffect(() => {
    nprogress.done();
  });

  return null;
}

function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <ApolloProvider client={client}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
            <AppInit />
          </ThemeProvider>
        </CacheProvider>
      </ApolloProvider>
    </>
  );
}
export default MyApp;