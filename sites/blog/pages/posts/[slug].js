import { getAllPostsWithSlug, getPost } from 'lib/graphcms'

import { CMS_NAME } from 'lib/constants'
import Container from 'components/container'
import ErrorPage from 'next/error'
//import dynamic from 'next/dynamic'
import Head from 'next/head'
import Header from 'components/header'
import Layout from 'components/layout'
import MoreStories from 'components/more-stories'
import PostBody from 'components/post-body'
import PostHeader from 'components/post-header'
import PostTitle from 'components/post-title'
import SectionSeparator from 'components/section-separator'
import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { useRouter } from 'next/router'

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  //a: CustomLink,
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  //  TestComponent: dynamic(() => import('../../components/TestComponent')),
  Head,
}
export default function Post({ source, post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  const content = hydrate(source, { components })


  return (
    <Layout >
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with {CMS_NAME}
                </title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.image}
                date={post.publish_date}
              />
              <PostBody content={content} />
            </article>
            <SectionSeparator />
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPost(params.slug)
  console.log("body:", post.body)
  const mdxSource = await renderToString(post.body, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },

  })

  return {
    props: {
      source: mdxSource,
      post: post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPostsWithSlug()
  return {
    paths: posts.map(({ id }) => ({
      params: { slug: id },
    })),
    fallback: false,
  }
}
