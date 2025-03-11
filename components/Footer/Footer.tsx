'use client'

import NavItem from '../NavItem/NavItem'
import { motion } from 'motion/react'

import { usePathname } from 'next/navigation'
import useHoverState from './useHoverState'
import { calculateAnimateScale } from './utils'
import { LINKS } from './constants'
import Icon from '../Icon/Icon'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import useThemeToggle from '@/hooks/useThemeToggle'

const Footer = () => {
  const currentRoute = usePathname()
  const { currentHoverPosition, onMouseEnter, onMouseLeave } = useHoverState()
  const { theme, toggleTheme } = useThemeToggle()

  return (
    <footer className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <motion.nav
        layout
        className="flex items-center bg-white pt-4 pb-2.5 pl-1 pr-1 border border-gray-100 shadow-sm"
        style={{ borderRadius: '32px' }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <ul className="relative flex items-end w-fit h-[36px]">
          {LINKS.map(({ href, label, icon }, index) => (
            <NavItem
              key={label}
              href={href}
              icon={icon}
              label={label}
              isActive={currentRoute === href}
              animateScale={calculateAnimateScale(currentHoverPosition, index)}
              onMouseEnter={() => {
                onMouseEnter(index)
              }}
              onMouseLeave={onMouseLeave}
            />
          ))}
          <NavItem
            key="Toggle theme"
            label="Toggle theme"
            icon={<Icon icon={theme === 'dark' ? <MoonIcon /> : <SunIcon />} />}
            onClick={toggleTheme}
            animateScale={calculateAnimateScale(
              currentHoverPosition,
              LINKS.length
            )}
            onMouseEnter={() => {
              onMouseEnter(LINKS.length)
            }}
            onMouseLeave={onMouseLeave}
          />
        </ul>
      </motion.nav>
    </footer>
  )
}

export default Footer
