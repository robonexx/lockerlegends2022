import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../utils/functions';
import IMG from '/public/images/socialdance.png';

import styles from '../../styles/components/Grid.module.scss';

function GridItem({ featuredImage, slug, title, date }) {
  const sourceUrl = featuredImage?.node?.sourceUrl || '';

  return (
    <div className={styles.grid_item}>
      <div className={styles.image}>
        <Image
          src={sourceUrl || IMG}
          alt={title}
          layout='fill'
          objectFit='cover'
          priority
        />
      </div>
      <h3 className={styles.grid_title}>{title}</h3>
      <Link href={`/blog/` + slug} passHref>
        <a aria-label={title}></a>
      </Link>
      <span>{formatDate(date)}</span>
    </div>
  );
}

export default GridItem;
