import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/ResponsiveGrid.module.scss';

export default function GridItem(props) {
  return (

        <div className={styles.item}>
          <div className={styles.title}>{props.title}</div>
          <div className={styles.image}>
            <Image
              src={`/images/${props.img}`}
              width={400}
              height={300}
              alt='item images'
            />
          </div>
          <Link className={styles.link} href={props.url}>Read More...</Link>
        </div>
    
  );
}
