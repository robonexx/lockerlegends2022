import React from 'react';
import Logo from '../logo/Logo';

// styles
import styles from '../../styles/components/TopMenu.module.scss';

export default function TopMenu() {
  return (
    <div className={styles.top_menu}>
      <Logo />
      <h3 className={styles.subtitle}>Educate before you Recreate</h3>
    </div>
  );
}
