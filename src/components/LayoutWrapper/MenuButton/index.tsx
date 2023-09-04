export interface MenuButtonAction {
  getTrigger: () => HTMLButtonElement | null
}

export interface MenuButtonProps {
  open?: boolean
  onChange?: (_open: boolean) => void
}

function MenuButton(props: MenuButtonProps, ref: React.Ref<MenuButtonAction>) {
  const { open, onChange } = props

  const fallbackRef = useRef<HTMLButtonElement>(null)
  const renderRef = useRef<HTMLButtonElement>(null)

  const buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement> = {
    'type': 'button',
    'className': cls`ml-1 mr-1 h-6 w-6 rounded sm:hidden`,
    'aria-label': 'Toggle Menu',
    'onClick': () => {
      onChange?.(!open)
    },
  }

  useImperativeHandle(ref, () => {
    return {
      getTrigger: () => {
        return renderRef.current || fallbackRef.current
      },
    }
  })

  return (
    <button ref={renderRef} {...buttonProps}>
      {/* <LazyIcon {...props} open={open} /> */}
    </button>
  )
}

export default forwardRef<MenuButtonAction, MenuButtonProps>(MenuButton)
