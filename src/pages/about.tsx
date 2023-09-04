import metadata from 'data/metadata'

export default function About() {
  const author = metadata.authors.find((p) => p.slug === 'default')

  if (!author) {
    return {
      notFound: true,
    }
  }
  {
    /* <MDXLayoutRenderer content={author} /> */
  }
  return <></>
}
