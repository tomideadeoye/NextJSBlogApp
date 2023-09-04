import Footer from '../Footer'
import Link from '../Link'
import ThemeSwitch from '../ThemeSwitch'

import MenuButton from './MenuButton'

import type { MenuButtonAction } from './MenuButton'

export const menu = [
  { href: '/compose', title: 'Compose', icon: cls`before:i-bx--bxs-meteor` },
]

interface Props {
  className?: string
  children: React.ReactNode
}

const LayoutWrapper = ({ className = '', children }: Props) => {
  const [open, setOpen] = useState(false)
  const [triggerCenter, setTriggerCenter] = useState<{
    x: number
    y: number
  }>()
  const menuButtonActionRef = useRef<MenuButtonAction>(null)

  useEffect(() => {
    const target = menuButtonActionRef.current?.getTrigger()
    if (!target) {
      return
    }
    const clientRect = target.getBoundingClientRect()

    setTriggerCenter({
      x: Math.round(clientRect.x + clientRect.width / 2),
      y: Math.round(clientRect.y + clientRect.height / 2),
    })
  }, [])

  return (
    <div
      className={`${className} mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0`}
    >
      <div className='flex h-screen flex-col justify-between'>
        <header className='relative z-20 flex items-center justify-between py-10'>
          <div>
            <Link href='/' aria-label='metaversehq blog'>
              <div
                className='flex items-center justify-between'
                onMouseDown={(event) => {
                  event.stopPropagation()
                  event.preventDefault()
                }}
              >
                <div className='flex items-center sm:mr-3'>
                  <img
                    src='/static/images/logo.webp'
                    alt='logo'
                    className='w-full'
                  />
                </div>

                <div className='hidden text-2xl font-semibold sm:block'>
                  Blog
                </div>
              </div>
            </Link>
          </div>
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {menu.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={cls`
                    p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4
                  `}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MenuButton
              ref={menuButtonActionRef}
              open={open}
              onChange={setOpen}
            />
          </div>
        </header>
        {/* // todo fix error in function here */}
        {/* <MenuMobile
          open={open}
          onChange={setOpen}
          triggerCenter={triggerCenter}
        /> */}
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </div>
  )
}

export default LayoutWrapper
