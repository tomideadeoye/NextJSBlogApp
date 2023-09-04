import { Blog } from '@/types'
import React, { createContext, useState, useEffect, ReactNode } from 'react'

type PostsContextType = {
  posts: Blog[]
}

const PostsContext = createContext<PostsContextType | undefined>(undefined)

type PostsProviderProps = {
  children: ReactNode
}

export function PostsProvider({ children }: PostsProviderProps) {
  const [posts, setPosts] = useState<Blog[]>([
    {
      title: 'New features in v1',
      date: '2021-08-07T15:32:14.000Z',
      tags: ['next-js', 'tailwind', 'guide'],

      type: 'Blog',
      body: [
        {
          content: `An overview of the new features released in v1 - code blog copy, multiple authors, frontmatter layout and more`,
          type: 'image',
        },
        {
          content: `An overview of the new features released in v1 - code blog copy, multiple authors, frontmatter layout and more`,
          type: 'text',
        },
        {
          content: `An overview of the new features released in v1 - code blog copy, multiple authors, frontmatter layout and more`,
          type: 'code',
        },
      ],
    },

    {
      title: 'O Canada',
      date: '2017-07-15T00:00:00.000Z',
      tags: ['holiday', 'canada', 'images'],
      body: [
        {
          content: `An overview of the new features released in v1 - code blog copy, multiple authors, frontmatter layout and more`,
          type: 'image',
        },
        {
          content: `An overview of the new features released in v1 - code blog copy, multiple authors, frontmatter layout and more`,
          type: 'text',
        },
        {
          content: `An overview of the new features released in v1 - code blog copy, multiple authors, frontmatter layout and more`,
          type: 'code',
        },
      ],
    },
  ])

  useEffect(() => {
    const storedPosts = localStorage.getItem('blogPosts')

    if (storedPosts) {
      const parsedPosts = JSON.parse(storedPosts) as Blog[]
      setPosts(parsedPosts)
    }
  }, [])

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  )
}

export default PostsContext
