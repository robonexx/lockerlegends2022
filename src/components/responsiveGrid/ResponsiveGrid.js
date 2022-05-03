import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { items } from '../../content/items';

import styles from '../../styles/components/ResponsiveGrid.module.scss';

export default function ResponsiveGrid() {
  return (
    <div className={styles.responsiveGrid}>
      {items.map(({ title, img, url }, i) => (
        <div key={i} className={styles.itemData}>
          <div className={styles.item}>
            <div className={styles.title}>{title}</div>
            <div className={styles.image}>
              <Image
                src={`/images/${img}`}
                width={400}
                height={300}
                alt='item images'
              />
            </div>
            <Link href={url}>Read More...</Link>
          </div>
        </div>
      ))}
    </div>
  );
}
