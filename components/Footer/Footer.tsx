'use client'

import NavItem from '../NavItem/NavItem'
import Icon from '../Icon/Icon'
import {
  DocumentTextIcon,
  HomeIcon,
  SunIcon,
} from '@heroicons/react/24/outline'
import { usePathname } from 'next/navigation'

const Footer = () => {
  const LINKS = [
    { href: '/', label: 'Home', icon: <Icon icon={<HomeIcon />} /> },
    { href: '/cv', label: 'CV', icon: <Icon icon={<DocumentTextIcon />} /> },
  ]
  const BUTTONS = [
    {
      label: 'Toggle theme',
      icon: <Icon icon={<SunIcon />} />,
      onclick: () => console.log('Button clicked'),
    },
  ]
  const currentRoute = usePathname()

  return (
    <footer className="absolute bottom-6 left-1/2 -translate-x-1/2 hover:scale-125 transition-transform duration-300">
      <nav className="flex items-center gap-2 bg-white-100 p-2 border border-gray-100 rounded-3xl shadow-sm">
        <ul
          aria-label="Website links"
          className="flex items-center gap-2 border-r border-gray-100 pr-2"
        >
          {LINKS.map(({ href, label, icon }) => (
            <li key={label}>
              <NavItem
                href={href}
                icon={icon}
                label={label}
                isActive={currentRoute === href}
              />
            </li>
          ))}
        </ul>
        <ul aria-label="Website controls" className="flex items-center gap-2">
          {BUTTONS.map(({ label, icon, onclick }) => (
            <li key={label}>
              <NavItem label={label} icon={icon} onClick={onclick} />
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
