import ScrollToTop from '../../utils/scrollToTop/ScrollToTop';
import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';

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
