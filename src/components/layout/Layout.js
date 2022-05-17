import Head from 'next/head';
import { useEffect } from 'react';
import ScrollToTop from '../../utils/scrollToTop/ScrollToTop';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Head lang='en'>
        <title>LockerLegends - educate before you recreate</title>
        <meta
          name='description'
          content='The official locking website of the streetdance pioneers hiphop streetdance funk soul history knowledge curriculum '
        />
        <meta property='og:title' content='Lockerlegends' key='title' />
        <link rel='icon' href='/favicon.ico' />
        <meta
          property='og:image'
          content='%PUBLIC_URL%/images/lockerlegendshome.png'
        />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='400' />
        <meta property='og:image:height' content='195' />
        <meta
          property='og:image:alt'
          content='The Official Locking pioneers website - LOCKERLEGENDS'
        />
      </Head>
      <Header />
      <ScrollToTop>
        <main>{children}</main>
      </ScrollToTop>
      <Footer />
    </>
  );
}
