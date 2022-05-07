import { fetchAPI } from '../api';

// get all posts

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

// get post slugs
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

// get latest posts

export async function getLatestPosts() {
  const data = await fetchAPI(`
    {
      posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
          edges {
              node {
                  title
                  slug
                  date
                  author{
                    node {
                      name
                    }
                  }

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

// get post by category
// interviews

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
                    
                }
            }
          }
        }
      `);
  return data?.posts;
}

// cateogory culture
export async function getPostCategoryCulture() {
  const data = await fetchAPI(`
    {
        posts(where: {categoryName: "culture"}, first: 5) {
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
                    
                }
            }
          }
        }
      `);
  return data?.posts;
}

// cateogory streetdance
export async function getPostCategoryStreetdance() {
  const data = await fetchAPI(`
    {
        posts(where: {categoryName: "streetdance"}, first: 5) {
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
                    
                }
            }
          }
        }
      `);
  return data?.posts;
}

// get posts and more posts
// having the frament inside could have just serparted it and will do so at a later state, not in the mvp of this website

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
