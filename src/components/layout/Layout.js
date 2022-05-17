import Head from 'next/head';
import { useEffect } from 'react';
import ScrollToTop from '../../utils/scrollToTop/ScrollToTop';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Head lang='en'>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width' />
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
        <meta property='og:locale' content='en_US'></meta>
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
        <link rel='icon' href='https://www.lockerlegends.net/favicon.ico' />
        <link rel='icon' href='https://www.lockerlegends.org/favicon.ico' />
        <link rel='icon' href='%PUBLIC_URL%/favicon.ico' />
        <meta name='robots' content='max-image-preview:large' />
      </Head>
      <Header />
      <ScrollToTop>
        <main>{children}</main>
      </ScrollToTop>
      <Footer />
    </>
  );
}
