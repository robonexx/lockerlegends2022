import React, { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

import styles from '../../styles/components/Navbar.module.scss';

export default function Nav(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu_icon} onClick={handleClick}>
        <div>
          {click ? (
            <FiX className={styles.nav_icon} />
          ) : (
            <FiMenu className={styles.nav_icon} />
          )}
        </div>
      </div>
      <ul
        className={
          click ? `${styles.nav_menu} ${styles.active}` : `${styles.nav_menu}`
        }
      >
        {props.children}
      </ul>
    </nav>
  );
}
