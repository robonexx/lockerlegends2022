import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate } from '../../utils/functions';

import styles from '../../styles/components/Slider.module.scss';

export default function SliderItem({
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
    <motion.div className={styles.slider_item}>
      <Image
        src={sourceUrl}
        layout='fill'
        objectFit='cover'
        objectPosition='top center'
        alt='blog post image'
        priority
      />

      <h3 className={styles.slider_title}>{title}</h3>
      <div className={styles.slider_item_info}>
        {slug ? (
          <Link href={`/blog/` + slug} passHref>
            <a aria-label={title}></a>
          </Link>
        ) : null}
        <span>{formatDate(date)}</span>
      </div>
    </motion.div>
  );
}
