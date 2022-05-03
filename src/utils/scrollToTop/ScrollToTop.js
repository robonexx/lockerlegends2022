import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ScrollToTop = ({ children }) => {
  const location = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
