import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '../../utils/functions';

import styles from '../../styles/components/Grid.module.scss';

export default function GridItem({
  props: {
    featuredImage: {
      node: { sourceUrl },
    },
    slug,
    title,
    date,
  },
}) {
  return (
    <motion.div className={styles.grid_item}>
        <div className={styles.image}>
          <Image
            src={sourceUrl}
            layout='fill'
            objectFit='cover'
            
            alt='blog post image'
            priority
          />
        </div>
      <h3 className={styles.grid_title}>{title}</h3>
      <Link href={`/blog/` + slug} passHref>
        <a aria-label={title}></a>
        {/* <span>Read more...</span> */}
      </Link>
      <span>{formatDate(date)}</span>
    </motion.div>
  );
}
