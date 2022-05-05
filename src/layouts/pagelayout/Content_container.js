import React from 'react';
import styles from '../../styles/layout/Content_container.module.scss';

export default function Content_container(props) {
  return <div className={styles.content_container}>{props.children}</div>;
}
