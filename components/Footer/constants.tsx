import Icon from '../Icon/Icon'
import { DocumentTextIcon, HomeIcon, SunIcon } from '@heroicons/react/24/solid'

export const LINKS = [
  { href: '/', label: 'Home', icon: <Icon icon={<HomeIcon />} /> },
  { href: '/cv', label: 'CV', icon: <Icon icon={<DocumentTextIcon />} /> },
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
