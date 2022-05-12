import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import styles from '../../styles/components/Slider.module.scss';

export default function Slider(props) {
  const [width, setWidth] = useState(0);

  const sliderRef = useRef();

  useEffect(() => {
    setWidth(sliderRef.current.scrollWidth + 10 - sliderRef.current.offsetWidth);
  }, []);

  return (
    <motion.div className={styles.slider} ref={sliderRef}>
      <motion.div
        drag='x'
        dragConstraints={{ right: 0, left: -width }}
        dragElastic={0.2}
        dragSnapToOrigin={false}
        className={styles.inner_slider}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
}
