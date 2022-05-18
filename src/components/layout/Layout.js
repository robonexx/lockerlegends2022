import Head from 'next/head';
import { useEffect } from 'react';
import ScrollToTop from '../../utils/scrollToTop/ScrollToTop';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Head lang='en-EN'>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>
          LOCKERLEGENDS "The Streetdance called Locking | Streetdance,
          HipHop,Lockers,Campbellocking, Locking &amp; Locking pioneers and
          history
        </title>
        <meta property='og:type' content='website'></meta>
        <meta
          property='og:description'
          key='desc'
          content='Streetdance, HipHop,Lockers,Campbellocking, Locking &amp; Locking pioneers and history'
        />
        <meta
          property='og:title'
          content='LOCKERLEGENDS "The Streetdance called Locking'
        />
        <meta property='og:url' content='https://www.lockerlegends.net/'></meta>
        <meta property='og:url' content='https://www.lockerlegends.org/'></meta>
        <meta
          property='og:site_name'
          content='LOCKERLEGENDS "The Streetdance called Locking'
        ></meta>
        <meta
          name='keywords'
          content='LOCKING,CAMPBELLOCKING,STREETDANCE,HIPHOP,CULTURE,HISTORY,KNOWLEDGE,LEARNING,SOUL TRAIN,WATTSTAXX,SOCIAL PARTY,BATTLES,PERFORMANCE,EDITORIALS,BLOG,AFRO AMEICAN HERITAGE, FUNK, SOUL'
        ></meta>
        <meta
          property='og:image'
          content='https://www.lockerlegends.org/lockerlegendshome.png'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='195' />
        <meta
          property='og:image:alt'
          content='The Official Locking pioneers website - LOCKERLEGENDS'
        />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black' />
        <meta name='HandheldFriendly' content='true' />
        <meta property='og:locale' content='en_US'></meta>
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <meta name='robots' content='max-image-preview:large' />
        <link rel='canonical' href='https://www.lockerlegends.org/'></link>
      </Head>
      <Header />
      <ScrollToTop>
        <main>{children}</main>
      </ScrollToTop>
      <Footer />
    </>
  );
}
