import React from 'react';
import Link from 'next/link';

import { items } from '../../content/items';

import styles from '../../styles/components/ResponsiveGrid.module.scss';

export default function ResponsiveGrid() {
  return (
    <div className={styles.responsiveGrid}>
      {items.map(({ title, image, url }, i) => (
        <div key={i} className={styles.itemData}>
          <div className={styles.item}>
            <div className={styles.title}>{title}</div>
            <div className={styles.image}>
              <img src={image} alt='item images' />
            </div>
            <Link href={url}>Read More...</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
