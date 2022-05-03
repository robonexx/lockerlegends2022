import ScrollToTop from '../../utils/scrollToTop/ScrollToTop';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <ScrollToTop>
        <main>{children}</main>
        <Footer />
      </ScrollToTop>
    </>
  );
}
