import React, { useState } from 'react';
import { navItems } from '../../content/navItems';
import Link from 'next/link';

// styles
import styles from '../../styles/components/DropDown.module.scss';

function DropDown(props) {
  return (
    <>
      <ul className={styles.dropdown_menu}>
        {/* {navItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={styles.dropdown_link}
                href={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })} */}
        {props.children}
      </ul>
    </>
  );
}

export default DropDown;
