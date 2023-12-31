import SocialIcon from '@/components/SocialIcon'
import metadata from 'data/metadata'
import Link from './Link'

export default function Footer() {
  return (
    <footer>
      <div className='mb-10 mt-16 flex flex-col items-center'>
        <div className='mb-3 flex space-x-4'>
          <SocialIcon
            kind='mail'
            href={`mailto:${metadata.email}`}
            size={1.5}
          />
          <SocialIcon kind='github' href={metadata.github} size={1.5} />
          <SocialIcon kind='facebook' href={metadata.facebook} size={1.5} />
          <SocialIcon kind='youtube' href={metadata.youtube} size={1.5} />
          <SocialIcon kind='linkedin' href={metadata.linkedin} size={1.5} />
          <SocialIcon kind='twitter' href={metadata.twitter} size={1.5} />
        </div>
        <div className='mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>Tomide Adeoye</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href='/'>MetaverseHQ Blog</Link>
        </div>
      </div>
    </footer>
  )
}
