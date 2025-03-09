'use client'

import NavItem from '../NavItem/NavItem'
import { motion } from 'motion/react'

import { usePathname } from 'next/navigation'
import useHoverState from './useHoverState'
import { calculateAnimateScale } from './utils'
import { BUTTONS, LINKS } from './constants'

const Footer = () => {
  const currentRoute = usePathname()
  const { currentHoverPosition, onMouseEnter, onMouseLeave } = useHoverState()

  return (
    <footer className="absolute bottom-6 left-1/2 -translate-x-1/2">
      <motion.nav
        layout
        className="flex items-center bg-white pt-4 pb-2.5 pl-1 pr-1 border border-gray-100 shadow-sm"
        style={{ borderRadius: '32px' }}
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
          {BUTTONS.map(({ label, icon, onclick }, index) => (
            <NavItem
              key={label}
              label={label}
              icon={icon}
              onClick={onclick}
              animateScale={calculateAnimateScale(
                currentHoverPosition,
                index + LINKS.length
              )}
              onMouseEnter={() => {
                onMouseEnter(index + LINKS.length)
              }}
              onMouseLeave={onMouseLeave}
            />
          ))}
        </ul>
      </motion.nav>
    </footer>
  )
}

export default Footer
