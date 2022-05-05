import React from 'react';

import styles from '../../styles/layout/Section_top.module.scss';

export default function Section_top(props) {
  return (
    <section className={styles.section_top}>
      <span className={styles.pre_title}>{props.pretitle}</span>
      <h1 className={styles.headline}>{props.headline}</h1>

      <span className={styles.subtitle}>{props.subtitle}</span>
    </section>
  );
}
