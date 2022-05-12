import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import styles from '../../styles/components/ResponsiveGrid.module.scss';

export default function GridItem({ props: { slug, title, date, featuredImage } }) {
  return (
    <div className={styles.item} key={props.key}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.image}>
        <Image
          src={`/images/${featuredImage}`}
          priority
          layout='fill'
          objectFit='cover'
          alt={`image of ${title}`}
        />
      </div>
      <div className={styles.info}>
        <div>
          <Link aria-label={title} className={styles.link} href={slug} passHref>
            <span>Read more...</span>
          </Link>
        </div>

        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
}
