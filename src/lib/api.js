const URL = process.env.NEXT_PUBLIC_WP_ENDPOINT;

export async function fetchAPI(query, { variables } = {}) {
  const headers = { 'Content-Type': 'application/json' };

  const res = await fetch(`${URL}/graphql`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  return json.data;
}
/* 
export async function getLatestPosts() {
  const data = await fetchAPI(`
      {
        posts(first: 5, where: { orderby: { field: DATE, order: DESC } }) {
            edges {
                node {
                    title
                    slug
                    date
                    
                }
            }
        }
    }
        `);
  return data?.posts;
} */
