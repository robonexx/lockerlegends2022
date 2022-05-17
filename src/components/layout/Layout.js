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
          key='desc'
        />
        <meta property='og:title' content='Lockerlegends' key='title' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <ScrollToTop>
        <main>{children}</main>
      </ScrollToTop>
      <Footer />
    </>
  );
}
