import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '../../styles/components/Navbar.module.scss';

export default function NavItem(props) {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
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

  
  const { events } = useRouter();
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]);

  return (
    <li className={styles.nav_item} key={props.title}
      onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.nav_links}
      >
        <span className={styles.link_icon}>{props.icon}</span>
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {dropdown && props.children}
      {click && props.children}
    </li>
  );
}
