import Head from 'next/head';
import {
  getAllPosts,
  getPostCategoryCulture,
  getPostCategorySocial,
  getPostCategoryEntertainment,
  getPostCategoryBattle,
  getPostCategoryStreetdance,
  getPostCategoryInterviews,
} from '../../lib/posts/get-posts';
/* import ResponsiveGrid from '../../components/responsiveGrid/ResponsiveGrid';
import GridItem from '../../components/responsiveGrid/GridItem'; */
import Grid from '../../components/Grid/Grid';
import GridItem from '../../components/Grid/GridItem';
import { motion } from 'framer-motion';
import Slider from '../../components/Carousel/Slider';
import SliderItem from '../../components/Carousel/SliderItem';

// styles
import styles from '../../styles/pages/Blog.module.scss';

export default function Blog({ posts, social }) {
  /* 
  const getCategorname = posts.map(({ node }) => {
    console.log(node.categories)
    console.log(node.categories.nodes)
    let names = []
    names = node.categories.nodes.map(({ name }) => name)
    console.log(names)
    return names
  })
  console.log(getCategorname) */
  return (
    <>
      <Head>
        <title>Editorials</title>
        <meta
          content='Editorials, blog page containing all blog posts'
          name='description'
        />
      </Head>

      <div className={styles.blog_main}>
        <header>
          <div>
            <h1>Editorials (Blog) </h1>
            <h2>
              Read the latest Editorials (posts) related to the artform of
              locking and culture...
            </h2>
          </div>
        </header>

        <div className={styles.blog_wrapper}>
          <h1>The Social Era! </h1>
          <Grid>
            {social.map(({ node }, idx) => {
              return (
                <div key={idx}>
                  <GridItem props={node} />
                </div>
              );
            })}
          </Grid>
        </div>

        <h1>All Posts</h1>
        <Slider>
          {posts.map(({ node }, idx) => {
            return (
              <div key={idx}>
                <SliderItem props={node} />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();
  const social = await getPostCategorySocial();
  const culture = await getPostCategoryCulture();
  const entertainment = await getPostCategoryEntertainment();
  const battle = await getPostCategoryBattle();
  const interviews = await getPostCategoryInterviews();
  const streetdacne = await getPostCategoryStreetdance();

  return {
    props: {
      posts: posts.edges,
      social: social.edges,
    },
  };
}

/* 
original map of the posts to the blog page.

<div className={styles.post_card} key={node.slug}>
                <h2> {node.title}</h2>
                <span>{formatDate(node.date)}</span>
                <Link href={`/blog/` + node.slug} passHref>
                  <a aria-label={node.title}></a>
                </Link>
              </div> 

*/
