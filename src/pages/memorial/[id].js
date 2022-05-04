import fetch from 'isomorphic-unfetch';
import { motion } from 'framer-motion';
import Link from 'next/link';

import styles from '../../styles/pages/Memorial.module.scss';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delay: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const fadeInUp = {
  initial: {
    x: -60,
    opacity: 0,
    transition: { delay: 0.4, duration: 0.3, ease: easing },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Memorial = (props) => (
  <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
    <div className={styles.fullscreen}>
      <Link href='/memorial'>
        <motion.div
          initial={{ x: -1000, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <a className={styles.go_back}>Back</a>
        </motion.div>
      </Link>

      <div className={styles.f_card}>
        <motion.div
          className={styles.img}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          <motion.img
            key={props.pioneer.image}
            src={`../${props.pioneer.image}`}
            animate={{ x: 0, opacity: 1 }}
            initial={{ x: -400, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>
        <div className={styles.details}>
          <motion.div variants={stagger} className={styles.inner}>
            <motion.div variants={fadeInUp}>
              <span className={styles.title}>O.G</span>
            </motion.div>
            <motion.h1 variants={fadeInUp}>{props.pioneer.name}</motion.h1>
            <motion.p variants={fadeInUp}>{props.pioneer.details}</motion.p>
            <motion.div variants={fadeInUp} className={styles.additionals}>
              <span>Style: </span>
              <span>Locking</span>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <span className={styles.steps}>{props.pioneer.steps}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.div>
);

Memorial.getInitialProps = async function (context) {
  const { id } = context.query;
  const res = await fetch(
    `https://my-json-server.typicode.com/robonexx/db/pioneers/${id}`
  );
  const pioneer = await res.json();
  return { pioneer };
};

export default Memorial;
