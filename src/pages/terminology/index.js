import React from 'react';
import Image from 'next/image'
import Content_container from '../../layouts/pagelayout/Content_container';
import PageLayout from '../../layouts/pagelayout/PageLayout';
import LeftSide from '../../layouts/pagelayout/LeftSide';
import RightSide from '../../layouts/pagelayout/RightSide';

// styles
import styles from '../../styles/pages/Terminology.module.scss';

export default function Terminology() {
  return (
    <div className={styles.terminology}>
      <PageLayout>
        <Content_container>
          <div className={styles.info_container}>
            <h1>Street Terminology</h1>
            <h2>text</h2>
            <p>text</p>
          </div>
        </Content_container>
        <LeftSide>
          <div className={styles.left_container}>
            <p>text</p>
          </div>
        </LeftSide>
        <RightSide>
          <p>Right side</p>
        </RightSide>
       
      </PageLayout>
    </div>
  );
}
