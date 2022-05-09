import React from 'react';
import Image from 'next/image';
import styles from '../../styles/layout/Hero.module.scss';

// trying this workaround to play videos on iphone / safari

const AutoPlayvideo = () => {
  <div
    dangerouslySetInnerHTML={{
      __html: (
        <video autoPlay loop muted playsInline className={styles.hero_video}>
          <source src='/video/la.webm' type='video/webm' />
        </video>
      ),
    }}
  />;
};

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_overlay}></div>
      <AutoPlayvideo />
      <section className={styles.hero_wrapper}>
        {/*  <h3 className={styles.hero_pretitle}></h3> */}
        {/*  <h1 className={styles.hero_title}>LOCKERLEGENDS</h1> */}
        <div className={styles.hero_logo}>
          <Image src='/svg/SVG_LOGO_TEXT.svg' layout='fill' alt='logo'></Image>
        </div>

        <h3 className={styles.hero_subtitle}>
          Official “LOCKING” pioneers website of the street dance pioneers
        </h3>
      </section>
    </div>
  );
}
