import { slug } from 'github-slugger'
import Link from 'next/link'

interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return <div className='btn-link uppercase'>{text.split(' ').join('-')}</div>
}

export default Tag
