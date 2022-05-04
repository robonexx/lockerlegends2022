import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

/* import { items } from '../../content/items'; */

import styles from '../../styles/components/ResponsiveGrid.module.scss';

export default function ResponsiveGrid(props) {
  return (
    <div className={styles.responsiveGrid}>
      {props.children}
    </div>
  );
}
