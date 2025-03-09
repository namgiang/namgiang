import Icon from '../Icon/Icon'
import { HomeIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/solid'

export const LINKS = [
  { href: '/', label: 'Home', icon: <Icon icon={<HomeIcon />} /> },
  {
    href: '/me',
    label: 'About me',
    icon: <Icon icon={<UserCircleIcon />} />,
  },
]
export const BUTTONS = [
  {
    label: 'Toggle theme',
    icon: <Icon icon={<SunIcon />} />,
    onclick: () => {
      console.log('Toggle theme')
    },
  },
]

export const NAV_ITEMS_COUNT = LINKS.length + BUTTONS.length
