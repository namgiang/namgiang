'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { motion, MotionConfig, useMotionValue } from 'motion/react'

interface BaseNavItemProps {
  animateScale: number
  label: string
  icon: React.ReactNode
  onMouseEnter: () => void
  onMouseLeave: () => void
}

interface NavLinkProps extends BaseNavItemProps {
  href: string
  onClick?: never
  isActive: boolean
}

interface NavButtonProps extends BaseNavItemProps {
  href?: never
  onClick: () => void
  isActive?: never
}

type NavItemProps = NavLinkProps | NavButtonProps

const className =
  'w-[40px] h-[40px] block bg-gray-100 rounded-full shadow-md p-2.5 flex items-center justify-center'

const NavItem = ({
  animateScale,
  label,
  icon,
  isActive,
  href,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: NavItemProps) => {
  const scale = useMotionValue(1)
  scale.set(animateScale)

  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <MotionConfig
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.6,
            }}
          >
            <motion.li
              layout
              key={label}
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              className="relative flex items-center justify-center pl-1 pr-1 top-0"
            >
              {href ? (
                <>
                  <motion.a
                    whileTap={{ y: -30 }}
                    transition={{
                      tap: { type: 'spring', bounce: 0.2, duration: 0.6 },
                    }}
                    layout
                    href={href}
                    aria-label={label}
                    className={className}
                    style={{
                      height: `calc(44px * ${scale.get()})`,
                      width: `calc(44px * ${scale.get()})`,
                    }}
                  >
                    <motion.span style={{ scale: scale.get() }}>
                      {icon}
                    </motion.span>
                  </motion.a>
                  {isActive && (
                    <motion.div
                      data-testid="active-indicator"
                      layoutRoot
                      className="-bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-gray-300 rounded-full"
                      style={{ position: 'absolute' }}
                    />
                  )}
                </>
              ) : (
                <motion.button
                  layout
                  aria-label={label}
                  className={className}
                  onClick={onClick}
                  style={{
                    height: `calc(44px * ${scale.get()})`,
                    width: `calc(44px * ${scale.get()})`,
                  }}
                >
                  <motion.span style={{ scale: scale.get() }}>
                    {icon}
                  </motion.span>
                </motion.button>
              )}
            </motion.li>
          </MotionConfig>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content sideOffset={5}>
            {label}
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}

export default NavItem
