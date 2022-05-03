import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import styles from '../../styles/components/Navbar.module.scss';

export default function Nav(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const menu = React.createRef(null);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.addEventListener('scroll', () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        menu.current.classList.add(`${styles.navbar && styles.bg_orange}`);
        menu.current.classList.remove(`${styles.hide}`);
      } else {
        menu.current.classList.add(`${styles.hide}`);
        menu.current.classList.remove(`${styles.navbar}`);
      }
      prevScrollpos = currentScrollPos;
    });
  }, []);

  return (
    <nav className={styles.navbar} ref={menu}>
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
