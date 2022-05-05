import React from 'react';
import Content_container from '../../layouts/pagelayout/Content_container';
import LeftSide from '../../layouts/pagelayout/LeftSide';
import PageLayout from '../../layouts/pagelayout/PageLayout';
import RightSide from '../../layouts/pagelayout/RightSide';

import styles from '../../styles/pages/History.module.scss';

export default function History() {
  return (
    <div>
      <PageLayout>
        <Content_container>
          {' '}
          <div className={styles.info_container}>
            <h1>History Page</h1>
            <h2>Here you can see an overview of all the history pages</h2>
            <p>
              You can click on the images to go that specific page and read more
            </p>
          </div>
        </Content_container>
        <section>
          <LeftSide>Left</LeftSide>
          <RightSide>Right</RightSide>
        </section>
      </PageLayout>
    </div>
  );
}
