import React from 'react';

import styles from '../../styles/layout/RightSide.module.scss';

export default function RightSide(props) {
  return <div className={styles.rightside}>{props.children}</div>;
}
