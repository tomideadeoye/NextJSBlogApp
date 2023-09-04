export interface Blog {
  title: string
  date?: string
  tags?: string[]
  type?: string
  readingTime?: {
    text?: string
    minutes?: number
    time?: number
    words?: number
  }
  authors?: Author[]
  body: {
    content?: string
    type?: 'code' | 'text' | 'image'
  }[]
}

export interface Author {
  authorName: string
  authorTitle?: string
  authorDescription?: string
  avatar?: string
  twitter?: string
}

export interface Metadata {
  title: string
  language: string
  siteUrl: string
  siteLogo: string
  siteRepo?: string
  theme?: 'system' | 'dark' | 'light'
  image: string
  socialBanner?: string
  email?: string
  github?: string
  twitter?: string
  facebook?: string
  youtube?: string
  linkedin: string
  locale: string
}

export function defineMetadata(metadata: Metadata) {
  return metadata
}

export interface IInitialValues {
  title: string
  body: {
    content: string
    type: string
  }[]
  tags: string
  authors: {
    authorName: string
    authorTitle: string
    authorDescription: string
    authorAvatar: string
    authorTwitter: string
  }[]
}
