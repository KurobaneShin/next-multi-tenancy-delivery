import * as React from 'react';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ModeProvider } from '@/contexts/modeContext';
import { TenantProvider } from '@/contexts/tenantContext';
import ThemeConfig from '@/theme';

import createEmotionCache from '../createEmotionCache'; //* style + assets
import '@/assets/scss/styles.scss'; //* styles

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ModeProvider>
        <TenantProvider>
          <ThemeConfig>
            <Component {...pageProps} />
          </ThemeConfig>
        </TenantProvider>
      </ModeProvider>
    </CacheProvider>
  );
}
