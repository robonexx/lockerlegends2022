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
import Grid from '../../components/Grid/Grid';
import GridItem from '../../components/Grid/GridItem';

// styles
import styles from '../../styles/pages/Blog.module.scss';

export default function Blog({
  posts,
  social,
  entertainment,
  battle,
  culture,
  streetdance,
  interviews,
}) {
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
        <p style={{ color: '#888' }}>
          This page will be updated in the coming months
        </p>
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
        <div className={styles.blog_wrapper}>
          <h1>The Performance & Entertainment Era! </h1>
          <Grid>
            {entertainment.map(({ node }, idx) => {
              return (
                <div key={idx}>
                  <GridItem props={node} />
                </div>
              );
            })}
          </Grid>
        </div>
        <div className={styles.blog_wrapper}>
          <h1>Battle Era! </h1>
          <Grid>
            {battle.map(({ node }, idx) => {
              return (
                <div key={idx}>
                  <GridItem props={node} />
                </div>
              );
            })}
          </Grid>
        </div>
        <div className={styles.blog_wrapper}>
          <h1>Streetdance! </h1>
          <Grid>
            {streetdance.map(({ node }, idx) => {
              return (
                <div key={idx}>
                  <GridItem props={node} />
                </div>
              );
            })}
          </Grid>
        </div>
        <div className={styles.blog_wrapper}>
          <h1>Culture! </h1>
          <Grid>
            {culture.map(({ node }, idx) => {
              return (
                <div key={idx}>
                  <GridItem props={node} />
                </div>
              );
            })}
          </Grid>
        </div>
        <div className={styles.blog_wrapper}>
          <h1>Interviews! </h1>
          <Grid>
            {interviews.map(({ node }, idx) => {
              return (
                <div key={idx}>
                  <GridItem props={node} />
                </div>
              );
            })}
          </Grid>
        </div>
        <div className={styles.blog_wrapper}>
          <h1>All Posts</h1>
          <Grid>
            {posts.map(({ node }, idx) => {
              return (
                <div key={idx}>
                  <GridItem props={node} />
                </div>
              );
            })}
          </Grid>
        </div>
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
  const streetdance = await getPostCategoryStreetdance();

  return {
    props: {
      posts: posts.edges,
      social: social.edges,
      entertainment: entertainment.edges,
      battle: battle.edges,
      culture: culture.edges,
      interviews: interviews.edges,
      streetdance: streetdance.edges,
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
