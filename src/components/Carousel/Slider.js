import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/components/Slider.module.scss';

export default function Slider(props) {
  const [width, setWidth] = useState(0);

  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth + 30 - slider.current.offsetWidth);
  }, []);

  return (
    <motion.div className={styles.slider} ref={slider}>
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        whileDrag={{ scale: 0.95 }}
        dragElastic={0.2}
        dragSnapToOrigin={false}
        className={styles.inner_slider}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
}
