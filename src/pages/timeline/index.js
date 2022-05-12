import React from 'react';

import ResponsiveGrid from '../../components/responsiveGrid/ResponsiveGrid';
import RGridItem from '../../components/responsiveGrid/RGridItem';
import { items } from '../../content/items';

export default function Timeline() {
  return (
    <div>
      <h1 style={{ fontSize: '3rem', color: 'white' }}>
        This Page is still Just a test for layouts and grid
      </h1>
      <ResponsiveGrid>
        {items.map(({ title, img, url, id, slug }) => (
          <div key={id}>
            <RGridItem
              title={title}
              featuredImage={img}
              url={url}
              slug={slug}
            />
          </div>
        ))}
      </ResponsiveGrid>
    </div>
  );
}
