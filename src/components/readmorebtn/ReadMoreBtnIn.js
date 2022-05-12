import React from 'react';
import Link from 'next/link';
import styles from '../../styles/components/ReadMoreBtn.module.scss';

export default function ReadMoreBtnOut(props) {
  return (
    <button className={styles.btn_special}>
      <Link href={props.srcUrl}>{props.title}</Link>
    </button>
  );
}
