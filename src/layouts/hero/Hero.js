import React, { useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/layout/Hero.module.scss';

const Vid = () => {
  return (
    <video autoPlay loop muted playsInline width='100%' height='100%'>
      <source src='/video/lavid.mp4' type='video/mp4' />
    </video>
  );
};

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_overlay}></div>

      <div className={styles.hero_video}>
        <Vid />
      </div>

      <section className={styles.hero_wrapper}>
        {/*  <h3 className={styles.hero_pretitle}></h3> */}
        {/*  <h1 className={styles.hero_title}>LOCKERLEGENDS</h1> */}
        <div className={styles.hero_logo}>
          <Image
            src='/svg/LOGO_HERO.svg'
            layout='fill'
            alt='logo'
            priority
          ></Image>
        </div>

        <h3 className={styles.hero_subtitle}>
          Official “LOCKING” pioneers website of the street dance pioneers
        </h3>
      </section>
    </div>
  );
}
