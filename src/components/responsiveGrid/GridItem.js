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
          priority
          layout='fill'
          objectFit='cover'
          alt={`image of ${props.title}`}
        />
      </div>
      <div className={styles.info}>
        <div>
          <Link
            aria-label={props.title}
            className={styles.link}
            href={props.url}
            passHref
          >
            <span>Read more...</span>
          </Link>
        </div>

        <p className={styles.date}>{props.date}</p>
      </div>
    </div>
  );
}
