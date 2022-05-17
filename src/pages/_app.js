import Layout from '../components/layout/Layout';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.scss';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
