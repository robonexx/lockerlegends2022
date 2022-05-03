import React from 'react';
import { pioneers } from '../../content/pioneers';
// styles
import styles from '../../styles/components/Sidebar.module.scss';

export default function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <ul>
          {pioneers.map(({ id, name, href, cName }) => (
            <li key={id}>
              <a href={href} className={cName}>
                <b>{name}</b>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
