import Head from 'next/head';
import Link from 'next/link';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import {
  getAllPostSlugs,
  getPostAndMorePosts,
} from '../../lib/posts/get-posts';

import { formatDate, metaDescription, removeTags } from '../../utils/functions';
import parse from 'html-react-parser';
import { replaceImage } from '../../utils/functions';
/* import Html2react from '../components/html2react'; */

import styles from '../../styles/pages/BlogSlug.module.scss';

export default function Blog({ blog, blogs }) {
  const router = useRouter();
  blogs = blogs?.edges;

  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  function makeExcerpt(desc) {
    var excerpt = removeTags(desc);
    excerpt = metaDescription(excerpt);
    return excerpt;
  }

  /* const replaceImage = {
    replace: ({ name, attribs, children }) => {
      if (name === 'figure' && /wp-block-image/.test(attribs.class)) {
        return <>{domToReact(children, replaceImage)}</>;
      }

      if (name === 'img') {
        return (
          <Image
            src={attribs.src}
            width={attribs.width}
            height={attribs.height}
            alt={
              attribs.alt ? attribs.alt : 'This image is missing an alt text please include one in your wp'
            }
          />
        );
      }
    },
  }; */

  return (
    <>
      {router.isFallback ? (
        <span>Loading…</span>
      ) : (
        <>
          <Head>
            <title>LockerLegends - {blog.title}</title>
            <meta content={makeExcerpt(blog.excerpt)} name='description' />
          </Head>

          <article className={styles.blog_slug_main}>
            <span className={styles.date}>{formatDate(blog.date)}</span>
            <h4 className={styles.blog_title}>Editorial: {blog.title}</h4>

            {/* {blog.featuredImage && (
              <Image
                src={blog.featuredImage.node.sourceUrl}
                height={blog.featuredImage.node.mediaDetails.height}
                width={blog.featuredImage.node.mediaDetails.width}
                layout='fill'
                objectFit='cover'
                alt='blog post image'
                priority
              />
            )} */}

            <div className={styles.post_wrapper}>
              {/* using the replace image function here and parse from html-react-parser */}
              {/* Using this method instead of dangerously set inner html */}
              {parse(blog.content, replaceImage)}
            </div>
          </article>

          <div className={styles.blog_related}>
            <h2 className={styles.more}>More to read</h2>

            <div className={styles.blog_grid}>
              {blogs.map(({ node }) => {
                return (
                  <div className={styles.post_card} key={node.slug}>
                    <h3>{node.title}</h3>
                    <span>{formatDate(node.date)}</span>
                    <Link href={`/blog/` + node.slug} passHref>
                      <a aria-label={node.title}></a>
                    </Link>
                  </div>
                );
              })}
              <Link href='/blog'>Check all posts</Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostAndMorePosts(params.slug);

  return {
    props: {
      blog: data.post,
      blogs: data.posts,
    },
  };
}

export async function getStaticPaths() {
  const allPosts = await getAllPostSlugs();

  return {
    paths: allPosts.edges.map(({ node }) => `/blog/${node.slug}`) || [],
    fallback: true,
  };
}
