import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/components/Banner.module.scss';
import stylee from '../../styles/components/Sidescroll.module.scss';

const banner = {
  animate: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const letterAni = {
  initial: { x: 300 },
  animate: {
    x: 0,
    transition: {
      ease: [0.5, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const Banner = () => {
  const [sideScroll, setSideScroll] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSideScroll(true);
    }, 500);
  }, []);
  return (
    <motion.div className={styles.banner} variants={banner}>
      <BannerRowTop title='THE&nbsp;GOGO' />
      <BannerRowCenter title='BROTHERS&nbsp;' sideScroll={sideScroll} />
      <BannerRowBottom title='Watts, CA' />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className={styles.row_title}
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate'
  >
    {[...title].map((letter, i) => (
      <motion.span
        key={i}
        className={styles.row_letter}
        variants={disabled ? null : letterAni}
      >
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={styles.banner_row}>
      <div className={styles.row_col}>
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 2,
        }}
        className={styles.row_col}
      >
        <motion.span
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className={styles.row_message}
        >
          <h3>OG SKEETER RABBIT</h3>
          <h3>TONY GOGO</h3>
          <h3>BUDDY GOGO</h3>
          <h3>KEVIN YOYO</h3>
        </motion.span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={`${styles.banner_row} ${styles.bottom}`}>
      <AnimatedLetters title={title} />
    </div>
  );
};

const BannerRowCenter = ({ title, sideScroll }) => {
  return (
    <div
      className={`${styles.banner_row} ${stylee.sideScroll}  ${
        sideScroll && `${stylee.animate}`
      }`}
    >
      <motion.div
        initial={{ y: 210 }}
        animate={{ y: 0 }}
        transition={{ elapsed: [0.3, 0.01, -0.05, 0.9], duration: 2 }}
        className={stylee.sideScroll__inner}
      >
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} />
      </motion.div>
    </div>
  );
};

export default Banner;
