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
            <h1>OUR STORY OF THE HISTORY OF LOCKING</h1>
            <h2>THIS IS A HISTORY OF THE ORIGINAL FOUNDATION OF A STREET DANCE CALLED ”LOCKING”</h2>
            <p>
              You can click on the images to go that specific page and read more
            </p>
          </div>
        </Content_container>
        <section>
          <LeftSide>
            <div className={styles.left_container}>
            <p>:as seen through the eyes of some of the original pioneers</p>
            </div>
          </LeftSide>
          <RightSide>Right</RightSide>
        </section>
      </PageLayout>
    </div>
  );
}
