import React from 'react';

import ResponsiveGrid from '../../components/responsiveGrid/ResponsiveGrid';
import GridItem from '../../components/responsiveGrid/GridItem';
import { items } from '../../content/items';

export default function Timeline() {
  return (
    <div>
        <h1 style={{ fontSize: '3rem', color: 'white' }}>
          This Page is still Just a test for layouts and grid
        </h1>
        <ResponsiveGrid>
          {items.map(({ title, img, url, id }) => (
            <React.Fragment key={id}>
              <GridItem title={title} img={img} url={url} />
            </React.Fragment>
          ))}
        </ResponsiveGrid>
    </div>
  );
}
