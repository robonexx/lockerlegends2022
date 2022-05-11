import Head from 'next/head';
import { getAllPosts } from '../../lib/posts/get-posts';
import Link from 'next/link';
import { formatDate } from '../../utils/functions';
import ResponsiveGrid from '../../components/responsiveGrid/ResponsiveGrid';
import GridItem from '../../components/responsiveGrid/GridItem';
import { motion } from 'framer-motion'

import styles from '../../styles/pages/Blog.module.scss';

const IMG = 'penguinscene.png';

export default function Blog({ posts }) {
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
              Read the latest Editorials (posts) related to the artform of locking and culture...
            </h2>
          </div>
        </header>
        <div className={styles.blog_wrapper}>
          <ResponsiveGrid>
            {posts?.map(({ node }) => {
              return (
                <div key={node.slug}>
                  <GridItem
                    url={`/blog/` + node.slug}
                    title={node.title}
                    img={IMG}
                    date={formatDate(node.date)}
                  />
                </div>
              );
            })}
          </ResponsiveGrid>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
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
