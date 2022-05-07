import React from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/pages/Wattsstaxx.module.scss';
import { getPostCategoryInterviews } from '../../lib/posts/get-posts';

export default function index({ interviews }) {
    
    const images = []

    interviews.map(({node: {featuredImage} }) => {
        images.push(featuredImage.node.sourceUrl)
    })

    console.log(images)
  return (
    <div className={styles.wattsstaxx}>
      <div className={styles.inner}>
              <motion.h1 animate={{ x: 0 }}
              initial={{x: 250}}>Slider</motion.h1>
          </div>
          <motion.div className={styles.slider}>

              <motion.div className={styles.inner_slider}>

              </motion.div>

          </motion.div>
    </div>
  );
}


export async function getStaticProps() {
    const interviews = await getPostCategoryInterviews();
  
    return {
      props: { interviews: interviews.edges },
    };
  }
  