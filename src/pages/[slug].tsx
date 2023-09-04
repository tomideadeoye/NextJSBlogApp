import PageTitle from '@/components/PageTitle'
import { sortedBlogPost } from '@/lib/utils/contentlayer'

import { BlogDetailLayout } from '@/layouts/BlogDetailLayout'
import PostsContext from '@/lib/utils/blogPostProvider'
import { useContext } from 'react'
import { useRouter } from 'next/router'
import { useEffect } from 'react' // Import useEffect

export default function BlogDetail() {
  const router = useRouter()
  const { slug } = router.query

  const postsContextData = useContext(PostsContext)?.posts ?? []
  const sortedPosts = sortedBlogPost(postsContextData)
  const post = sortedPosts.find((p) => p.title === slug)

  const postIndex = sortedPosts.findIndex((p) => p.title === slug)
  const prevContent = sortedPosts[postIndex + 1] || null
  const prev = prevContent ? prevContent : null
  const nextContent = sortedPosts[postIndex - 1] || null
  const next = nextContent ? nextContent : null

  return <BlogDetailLayout content={post} prev={prev} next={next} />
}
