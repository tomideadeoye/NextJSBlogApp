import metadata from 'data/metadata'
import ListLayout from '@/layouts/ListLayout'
import { sortedBlogPost } from '@/lib/utils/contentlayer'

import { POSTS_PER_PAGE } from '../..'

import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next'
import { Blog } from '@/types'
import PostsContext from '@/lib/utils/blogPostProvider'

export const getStaticPaths: GetStaticPaths<{
  page: string
}> = async () => {
  const posts = useContext(PostsContext)?.posts ?? []
  const totalPosts = posts
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<
  {
    initialDisplayPosts: Blog[]
    posts: Blog[]
    pagination: {
      currentPage: number
      totalPages: number
    }
  },
  { page: string }
> = async (context) => {
  const page = context.params!.page
  const posts = useContext(PostsContext)?.posts ?? []
  const pageNumber = parseInt(page, 10)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber,
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: initialDisplayPosts,
      posts: posts,
      pagination,
    },
  }
}

export default function PostPage({
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const posts = useContext(PostsContext)?.posts ?? []
  const totalPosts = posts
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return (
    <ListLayout
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title='All Posts'
    />
  )
}
