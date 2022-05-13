import React from 'react';
import styles from '../../styles/components/ContactBtn.module.scss';

export default function ContactBtn(props) {
  return (
    <div className={styles.contact}>
      <a href={props.url} className={styles.contact_link}>
        <span>{props.icon}</span>
        <span>{props.title}</span>
      </a>
    </div>
  );
}
