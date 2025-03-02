import { render, screen, fireEvent } from '@testing-library/react'
import NavItem from './NavItem'

describe('NavItem Component', () => {
  const mockIcon = <svg data-testid="icon" />

  it('renders a link when href is provided', () => {
    render(<NavItem label="Home" icon={mockIcon} href="/" isActive={true} />)
    const linkElement = screen.getByRole('link', { name: 'Home' })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/')
    expect(linkElement).toContainElement(screen.getByTestId('icon'))
  })

  it('renders a button when onClick is provided', () => {
    const handleClick = jest.fn()
    render(<NavItem label="Click Me" icon={mockIcon} onClick={handleClick} />)
    const buttonElement = screen.getByRole('button', { name: 'Click Me' })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toContainElement(screen.getByTestId('icon'))
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies active styles when isActive is true', () => {
    render(
      <NavItem label="Active Link" icon={mockIcon} href="/" isActive={true} />
    )
    const linkElement = screen.getByRole('link', { name: /active link/i })
    expect(linkElement).toHaveClass('after:bg-gray-200')
  })

  it('does not apply active styles when isActive is false', () => {
    render(
      <NavItem
        label="Inactive Link"
        icon={mockIcon}
        href="/"
        isActive={false}
      />
    )
    const linkElement = screen.getByRole('link', { name: /inactive link/i })
    expect(linkElement).not.toHaveClass('after:bg-gray-200')
  })
})
