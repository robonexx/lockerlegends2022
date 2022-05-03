import React from 'react';
import styles from '../../styles/components/Hero.module.scss';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_overlay}></div>
      <video autoPlay loop muted className={styles.hero_video}>
        <source src='/video/la.webm' type='video/webm' />
      </video>
      <section className={styles.hero_wrapper}>
        <h3 className={styles.hero_pretitle}>Welcome to</h3>
        <h1 className={styles.hero_title}>LOCKERLEGENDS</h1>

        <h3 className={styles.hero_subtitle}>
          Official “LOCKING” pioneers website of the street dance pioneers
        </h3>
      </section>
    </div>
  );
}
