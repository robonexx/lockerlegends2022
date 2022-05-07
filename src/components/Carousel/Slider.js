import React from 'react';

import styles from '../../components/Slider.module.scss';

export default function Slider(props) {
  return <div className={styles.slider_wrapper}>{props.children}</div>;
}
