import Head from 'next/head';
import { getAllPosts } from '../../lib/posts/get-posts';
import Link from 'next/link';
import { formatDate } from '../../utils/functions';

import styles from '../../styles/pages/Blog.module.scss';

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - LL</title>
        <meta content='Read my latest blog posts' name='description' />
      </Head>

      <div className={styles.blog_main}>
        <div className={styles.blog_wrapper}>
          {posts?.map(({ node }) => {
            return (
              <div className={styles.post_card} key={node.slug}>
                <h2> {node.title}</h2>
                <span>{formatDate(node.date)}</span>
                <Link href={`/blog/` + node.slug} passHref>
                  <a aria-label={node.title}></a>
                </Link>
              </div>
            );
          })}
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
