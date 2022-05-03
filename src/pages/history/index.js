import React from 'react';
import PageLayout from '../../components/pagelayout/PageLayout';
import Section from '../../components/pagelayout/Section';
import ResponsiveGrid from '../../components/responsiveGrid/ResponsiveGrid';

import styles from '../../styles/pages/History.module.scss';

export default function History() {
  return (
    <div>
      <PageLayout>
        <Section>
          <div className={styles.info_container}>
            <h1>History Page</h1>
            <h2>Here you can see an overview of all the history pages</h2>
            <p>
              You can click on the images to go that specific page and read more
            </p>
          </div>
          <ResponsiveGrid />
        </Section>
      </PageLayout>
    </div>
  );
}
