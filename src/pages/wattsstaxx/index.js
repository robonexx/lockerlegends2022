import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/pages/Wattsstaxx.module.scss';
import {
  getAllPostSlugs,
  getPostCategoryInterviews,
} from '../../lib/posts/get-posts';
import Image from 'next/image';
import { formatDate } from '../../utils/functions';
import Slider from '../../components/Carousel/Slider';
import SliderItem from '../../components/Carousel/sliderItem';

import Grid from '../../components/Grid/Grid';
import GridItem from '../../components/Grid/GridItem';

export default function index({ interviews }) {
  /*  const [index, setIndex] = useState();
  const [width, setWidth] = useState(0);

  const slider = useRef();

  const images = [];

  interviews.map(({ node: { featuredImage } }) => {
    images.push(featuredImage.node.sourceUrl);
  });

  useEffect(() => {
    setWidth(slider.current.scrollWidth + 30 - slider.current.offsetWidth);
  }, []);

  console.log(images); */
  return (
    <div className={styles.wattsstaxx}>
      <div className={styles.inner}>
        <motion.h1 animate={{ x: 0 }} initial={{ x: 250 }}>
         Grid
        </motion.h1>
      </div>
      <Grid>
        {interviews.map(({ node }, idx) => {
          return (
            <div key={idx}>
              <GridItem props={node} />
            </div>
          );
        })}
      </Grid>
      {/*  <motion.div className={styles.slider} ref={slider}>
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          whileDrag={{ scale: 0.9 }}
          dragElastic={0.2}
          dragSnapToOrigin={false}
          className={styles.inner_slider}
        >
          {interviews.map(({ node: { featuredImage, title, date } }) => (
            <motion.div className={styles.slider_item} key={title}>
              <Image
                src={featuredImage.node.sourceUrl}
                layout='fill'
                objectFit='cover'
                objectPosition='top center'
                alt='blog post image'
                priority
              />
              <h3 className={styles.slider_title}>{title}</h3>
              <span>{formatDate(date)}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div> */}
    </div>
  );
}

export async function getStaticProps() {
  const interviews = await getPostCategoryInterviews();

  return {
    props: { interviews: interviews.edges },
  };
}
