import Head from 'next/head';
import { motion } from 'framer-motion';
import {
  getLatestPosts,
  getPostCategoryInterviews,
  getPostCategoryStreetdance,
} from '../lib/posts/get-posts';
import { formatDate } from '../utils/functions';
import Link from 'next/link';
import Hero from '../layouts/hero/Hero';
import Image from 'next/image';
import styles from '../styles/pages/Home.module.scss';
import Slider from '../components/Carousel/Slider';
import SliderItem from '../components/Carousel/sliderItem';
import { AiFillCaretRight } from 'react-icons/ai';

import GridItem from '../components/Grid/GridItem';
import Grid from '../components/Grid/Grid';

/* const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
}; */

export default function Home({ posts, interviews, streetdance }) {
  return (
    <>
      <Head lang='en'>
        <title>LockerLegends</title>
        {/*  <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        ></meta>
        <meta
          name='description'
          content='Learn and read about the dance style locking, important information, history, locking curriculum, streetdance, culture, all in one place'
        /> */}
      </Head>
      <div className={styles.home_main}>
        <Hero />
        <div className={styles.home_section}>
          <div className={styles.blog_section}>
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className={styles.title}
            >
              <h1>Editorials</h1>
            </motion.div>
            <p>Read about locking, culture, interviews and more...</p>
            <h3 className={styles.blog_row_title}>Latest Posts:</h3>
            <Grid>
              {posts.map(({ node }, idx) => {
                return (
                  <div key={idx}>
                    <GridItem props={node} />
                  </div>
                );
              })}
            </Grid>

            <h3 className={styles.blog_row_title}>Streetdance:</h3>
            <Grid>
              {streetdance.map(({ node }, idx) => {
                return (
                  <div key={idx}>
                    <GridItem props={node} />
                  </div>
                );
              })}
            </Grid>

            <h3 className={styles.blog_row_title}>Interviews:</h3>
            <Grid>
              {interviews.map(({ node }, idx) => {
                return (
                  <div key={idx}>
                    <GridItem props={node} />
                  </div>
                );
              })}
            </Grid>
            <p className={styles.blog_info}>
              More editorials on the editorial(blog) page, read about the
              history, culture and dance of the artform locking
            </p>
          </div>

          <div className={styles.content_section}>
            <div className={styles.home_article}>
              <h1>EDUCATE B4U RECREATE</h1>
              <p>
                Over 15 years Lockerlegends have served your Locking educational
                need
              </p>
              <br />
              <p>
                THE ART-FORM & CULTURE OF A STREET DANCE IS MUCH MORE THAN THE
                MOVES THAT CREATE THE DANCE ITSELF. <br /> THE ORIGINAL DANCE
                STYLE CALLED LOCKING HAS DEEP ROOTS WITHIN A ERA, WHICH MENT SO
                MUCH TO THE UNITY AND DE SEGREGATION OF A PEOPLE… READ… LEARN
                and understand what brought about the evolution of words like
                soul and funk.. <br />
                <br />
                Understand the DANCERS that contributed to the Original
                foundation of this dance & opened the door to what exist today
                as <br />
                <br /> “THE STREET DANCE OF LOCKING” <br />
                <br />
                Help us solidify this from just a dance into a ART-FORM to be
                passed down to future generations ! we have spent many hours &
                helped many along the way & now would ask all who have
                benefitted & enjoyed our site to take a few moments post a
                comment, about what the site has meant to you on our Facebook
                Group Page. <br />- join our Lockerlegends Facebook page
                <Link
                  className={styles.fb_page_link}
                  href={{
                    pathname: 'https://www.facebook.com/groups/158481954185947',
                  }}
                  target='_blank'
                >
                  CLICK HERE
                </Link>
                <br />
                <br />
                Then just ask to join the Lockerlegends /Lockers United Group,
                we would love for you to share what you think about our website
                there. <br />
                <br />
                ENJOY THE WEBSITE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getLatestPosts();
  const interviews = await getPostCategoryInterviews();
  const streetdance = await getPostCategoryStreetdance();

  return {
    props: {
      posts: posts.edges,
      interviews: interviews.edges,
      streetdance: streetdance.edges,
    },
  };
}
