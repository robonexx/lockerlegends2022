import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../../utils/functions';

import IMG from '../../../public/images/33rpm.png'

import styles from '../../styles/components/Grid.module.scss';

export default function GridItem({
  props
}) {
  console.log(props)
  
  const { title, slug, date, featuredImage } = props

  const { node: { sourceUrl } } = featuredImage

  console.log(sourceUrl)
  
/*   props: {
    featuredImage: {
      node: { sourceUrl },
    },
    slug,
    title,
    date,
  }, */
  return (
    <div className={styles.grid_item}>
      <div className={styles.image}>
        <Image
          src={ IMG}
          layout='fill'
          objectFit='cover'
          alt='blog post image'
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
