import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from 'components/container'
import PostBody from 'components/post-body'
import MoreStories from 'components/more-stories'
import Header from 'components/header'
import PostHeader from 'components/post-header'
import SectionSeparator from 'components/section-separator'
import Layout from 'components/layout'
import { getAllPostsWithSlug, getPost } from 'lib/graphcms'
import PostTitle from 'components/post-title'
import Head from 'next/head'
import { CMS_NAME } from 'lib/constants'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()

  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }

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
              <PostBody content={post.body} />
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
  return {
    props: {
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
    fallback: true,
  }
}
