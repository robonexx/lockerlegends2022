import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import styles from '../../styles/components/DropDown.module.scss';

export default function DropDownItem(props) {
  const [click, setClick] = useState(false);

  const { events } = useRouter();
  const closeMobileMenu = () => setClick(false);

  // using useEffect to navigate from nav to a new page
  useEffect(() => {
    // subscribe to next/router event
    events.on('routeChangeStart', closeMobileMenu);
    return () => {
      // unsubscribe to event on unmount to prevent memory leak
      events.off('routeChangeStart', closeMobileMenu);
    };
  }, [closeMobileMenu, events]);

  return (
    <li key={props.title} className={styles.dropdown_item}>
      <a
        href={props.url}
        onClick={closeMobileMenu}
        className={styles.dropdown_link}
      >
        <span className={styles.link_icon}>{props.icon}</span>
        <span className={styles.link_title}>{props.title}</span>
      </a>
      {click && props.children}
    </li>
  );
}
