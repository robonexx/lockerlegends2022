import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FiChevronDown } from 'react-icons/fi';

import styles from '../../styles/components/Faq.module.scss'

export default function FaqItem({ name, desc, id }) {
  const [isActive, setActive] = useState(false);

  return (
    <li key={id} className={!isActive ? styles.faq : `${styles.faq} ${styles.active}`}>
      <button className={styles.faq_toggle} onClick={() => setActive(!isActive)}>
        {!isActive ? (
          <FiChevronDown className={styles.icon} />
        ) : (
          <FiX className={styles.icon} />
        )}
      </button>
      <h3 className={styles.faq_title}>{name}</h3>
      <div className={styles.faq_text}>
        <p>{desc}</p>
      </div>
    </li>
  );
}
