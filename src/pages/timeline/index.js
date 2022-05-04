import React from 'react';
import LeftSide from '../../layouts/pagelayout/LeftSide';
import PageLayout from '../../layouts/pagelayout/PageLayout';
import RightSide from '../../layouts/pagelayout/RightSide';
import Section from '../../layouts/pagelayout/Section';
import ResponsiveGrid from '../../components/responsiveGrid/ResponsiveGrid';
import GridItem from '../../components/responsiveGrid/GridItem';
import { items } from '../../content/items';

export default function Timeline() {
  return (
    <div>
      <PageLayout>
        <h1 style={{ fontSize: '3rem', color: 'white' }}>
          This Page is still Just a test for layouts and grid
        </h1>
        <ResponsiveGrid>
          {items.map(({ title, img, url }, i) => (
            <li key={i}>
              <GridItem title={title} img={img} url={url} />
            </li>
          ))}
        </ResponsiveGrid>
        <Section>Section</Section>
        <section>
          <LeftSide>Left</LeftSide>
          <RightSide>Right</RightSide>
        </section>
      </PageLayout>
    </div>
  );
}
