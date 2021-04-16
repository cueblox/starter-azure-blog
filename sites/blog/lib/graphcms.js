async function fetchAPI(dataset, slug = null) {
  var request = 'https://brave-water-0fbfe4710.azurestaticapps.net/api/' + dataset
  if (slug !== null) {
    request = request + "/" + slug
  }
  const res = await fetch(request, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },

  })
  const json = await res.json()

  if (json.errors) {
    console.log(process.env.CUEBLOX_PROJECT_API)
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }
  console.log(json)
  return json
}


export async function getAllPostsForHome(preview) {
  const data = await fetchAPI("articles")

  return data
}
export async function getAllPostsWithSlug() {
  const data = await fetchAPI("articles")

  return data
}

export async function getPost(slug) {
  const data = await fetchAPI("articles", slug)

  return data
}
