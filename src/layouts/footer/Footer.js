import { useEffect } from 'react';

import styles from '../../styles/layout/Footer.module.scss';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        &copy; Copyright {new Date().getFullYear()}. All Rights Reserved.
        LOCKERLEGENDS
      </p>
      <img src='/images/roblogo.png' alt='logo robertwagar@gmail.com' type='png' />
    </footer>
  );
}
