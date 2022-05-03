import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import Hof from '../../components/hof/Hof';

import styles from '../../styles/pages/HallOfFame.module.scss';

// get content for page

export const hof = () => {
  return (
    <div className={styles.hof}>
      <Sidebar />
      <div id={styles.main_doc}>
        <h1 className={styles.hof_title}>O.G pioneers hall of fame</h1>
        <Hof />
      </div>
    </div>
  );
};

export default hof;
