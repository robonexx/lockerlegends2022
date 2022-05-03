import React from 'react';
import styles from '../../styles/components/PageLayout.module.scss';

export default function PageLayout(props) {
    return <div className={styles.page_layout}>
      {props.children}
  </div>;
}
