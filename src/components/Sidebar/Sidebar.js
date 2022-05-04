import React from 'react';
import { pioneers } from '../../content/pioneers';
// styles
import styles from '../../styles/components/Sidebar.module.scss';

export default function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <ul >
          {pioneers.map(({ id, name, href }) => (
            <li key={id}>
              <a href={href} className={styles.sidebar_link}>
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
