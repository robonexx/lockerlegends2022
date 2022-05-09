import React from 'react';

import styles from '../../styles/layout/LeftSide.module.scss';

export default function LeftSide(props) {
  return <div className={styles.leftside}>{props.children}</div>;
}
