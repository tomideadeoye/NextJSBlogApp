import ListLayout from '@/layouts/ListLayout'
import PostsContext from '@/lib/utils/blogPostProvider'
import { sortedBlogPost } from '@/lib/utils/contentlayer'

export const POSTS_PER_PAGE = 5

export default function Blog() {
  const postContext = useContext(PostsContext)

  const allPosts = postContext?.posts ?? []
  const posts = sortedBlogPost(allPosts)

  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title='All Posts'
    />
  )
}
