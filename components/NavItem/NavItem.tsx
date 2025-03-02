import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'

interface BaseNavItemProps {
  label: string
  icon: React.ReactNode
}

interface NavLinkProps extends BaseNavItemProps {
  href: Url
  onClick?: never
  isActive: boolean
}

interface NavButtonProps extends BaseNavItemProps {
  href?: never
  onClick: () => void
  isActive?: never
}

type NavItemProps = NavLinkProps | NavButtonProps

const NavItem = ({ label, icon, isActive, href, onClick }: NavItemProps) => {
  const className = 'relative block bg-gray-100 rounded-full shadow-sm p-2'

  return href ? (
    <Link
      href={href}
      aria-label={label}
      className={`${className}${
        isActive
          ? ' after:bg-gray-200 after:rounded-full after:absolute after:w-1 after:h-1 after:-bottom-1.5 after:left-1/2 after:-translate-x-1/2'
          : ''
      }`}
    >
      {icon}
    </Link>
  ) : (
    <button aria-label={label} className={className} onClick={onClick}>
      {icon}
    </button>
  )
}
export default NavItem
