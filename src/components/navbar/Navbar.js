import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
/* import DropDown from './DropDown'; */
import { FiMenu } from 'react-icons/fi';
import { FiX } from 'react-icons/fi';

// styles
import styles from '../../styles/components/Navbar.module.scss';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const { events } = useRouter();

  const handleClick = () => setClick(!click);
  c

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]);

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
        <li className={styles.nav_item}>
          <Link href='/' onClick={closeMobileMenu} className={styles.nav_links}>
            Home
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href='/about' onClick={closeMobileMenu}>
            About
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href='/history' onClick={closeMobileMenu}>
            History
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href='/hof' onClick={closeMobileMenu}>
            Hof
          </Link>
        </li>
        <li className={styles.nav_item}>
          <Link href='/steps' onClick={closeMobileMenu}>
            Steps & Moves
          </Link>
        </li>
        <li
          className={styles.nav_item}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link href='/blog' onClick={closeMobileMenu}>
            blog
          </Link>
          {/* {dropdown && <DropDown />} */}
        </li>

        <li className={styles.nav_item}>
          <Link
            href='/contact'
            className={`${styles.nav_links} ${styles.contact}`}
            onClick={closeMobileMenu}
          >
            contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
