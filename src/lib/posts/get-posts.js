import { fetchAPI } from '../api';

export async function getAllPosts() {
  const data = await fetchAPI(`
      {
          posts(first: 1000) {
              edges {
                  node {
                      title
                      excerpt
                      slug
                      date
                      
                      featuredImage {
                          node {
                              sourceUrl
                          }
                      }
                      categories {
                          nodes {
                              name
                              slug
                          }
                      }
                  }
              }
          }
      }
      `);
  return data?.posts.edges;
}

export async function getAllPostSlugs() {
  const data = await fetchAPI(`
       {
           posts(first: 10) {
               edges {
                   node {
                       slug
                   }
               }
           }
       }
      `);
  return data?.posts;
}

export async function getLatestPosts() {
  const data = await fetchAPI(`
    {
      posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
              node {
                  title
                  slug
                  date

                  featuredImage {
                    node {
                        sourceUrl
                    }
                }
                categories {
                    nodes {
                        name
                        slug
                    }
                }
                  
              }
          }
      }
  }
      `);
  return data?.posts;
}

export async function getPostCategoryInterviews() {
  const data = await fetchAPI(`
    {
        posts(where: {categoryName: "interviews"}, first: 5) {
            edges {
                node {
                    title
                    slug
                    date

                    featuredImage {
                        node {
                            sourceUrl
                        }
                    }
                    categories {
                        nodes {
                            name
                            slug
                        }
                    }
                    
                }
            }
          }
  }
      `);
  return data?.posts;
}

export async function getPostCategoryCulture() {
  const data = await fetchAPI(`
    {
        posts(where: {categoryName: "culture"}, first: 5) {
            nodes {
              title
              categories(where: {orderby: TERM_ORDER}) {
                nodes {
                  id
                  name
                  databaseId
                }
              }
            }
          }
  }
      `);
  return data?.posts;
}

export async function getPostAndMorePosts(slug) {
  const data = await fetchAPI(
    `
      fragment PostFields on Post {
          title
          excerpt
          slug
          date
          
          featuredImage {
              node {
                  sourceUrl
                  mediaDetails {
                      height
                      width
                  }
              }
          }
      }
      query PostBySlug($id: ID!, $idType: PostIdType!) {
          post(id: $id, idType: $idType) {
              ...PostFields
              content
          }
          posts(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
              edges {
                  node {
                      ...PostFields
                  }
              }
          }
      }
      `,
    {
      variables: {
        id: slug,
        idType: 'SLUG',
      },
    }
  );
  data.posts.edges = data.posts.edges.filter(({ node }) => node.slug !== slug);
  if (data.posts.edges.length > 3) data.posts.edges.pop();

  return data;
}
