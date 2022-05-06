import React, { useState, useEffect, useRef } from 'react';
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';
import styles from '../../styles/components/Navbar.module.scss';

export default function Nav(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const navRef = useRef();

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    const handleScroll = () => {
      let currentScrollPos = window.pageYOffset;

      if (prevScrollpos > currentScrollPos) {
        navRef.current.classList.add(`${styles.navbar && styles.bgorange}`);
        navRef.current.classList.remove(`${styles.hide}`);
      } else {
        navRef.current.classList.add(`${styles.hide}`);
        navRef.current.classList.remove(`${styles.navbar && styles.bgorange}`);
      }
      prevScrollpos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar} ref={navRef}>
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
