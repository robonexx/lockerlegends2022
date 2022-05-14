import Head from 'next/head'
import Sidebar from '../../components/Sidebar/Sidebar';
import Hof from '../../components/Hof/Hof';

import styles from '../../styles/pages/Pioneers.module.scss';

// get content for page

export const Pioneers = () => {
  return (
    <div className={styles.hof}>
      <Head lang='en'>
        <title>Hall of Fame - LockerLegends</title>
        <meta
          name='description'
          content='The hall of fame O.G pioneers of the artform locking'
        />
        <meta property='og:title' content='Knowledge about the pioneers' />
      </Head>
      <Sidebar />
      <div id={styles.main_doc}>
        <h1 className={styles.hof_title}>O.G pioneers hall of fame</h1>
        <Hof />
      </div>
    </div>
  );
};

export default Pioneers;
