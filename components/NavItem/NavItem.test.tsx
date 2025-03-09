import { render, screen, fireEvent } from '@testing-library/react'
import NavItem from './NavItem'

describe('NavItem Component', () => {
  const mockIcon = <svg data-testid="icon" />
  const onMouseEnter = jest.fn()
  const onMouseLeave = jest.fn()

  it('renders a link when href is provided', () => {
    render(
      <NavItem
        label="Home"
        icon={mockIcon}
        href="/"
        isActive={true}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        animateScale={1}
      />
    )
    const linkElement = screen.getByRole('link', { name: 'Home' })
    expect(linkElement).toBeInTheDocument()
    expect(linkElement).toHaveAttribute('href', '/')
    expect(linkElement).toContainElement(screen.getByTestId('icon'))
  })

  it('renders a button when onClick is provided', () => {
    const handleClick = jest.fn()
    render(
      <NavItem
        label="Click Me"
        icon={mockIcon}
        onClick={handleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        animateScale={1}
      />
    )
    const buttonElement = screen.getByRole('button', { name: 'Click Me' })
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toContainElement(screen.getByTestId('icon'))
    fireEvent.click(buttonElement)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('render active indicator when isActive is true', () => {
    render(
      <NavItem
        label="Active Link"
        icon={mockIcon}
        href="/"
        isActive={true}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        animateScale={1}
      />
    )
    expect(screen.getByTestId('active-indicator')).toBeVisible()
  })

  it('does not render active indicator when isActive is false', () => {
    render(
      <NavItem
        label="Active Link"
        icon={mockIcon}
        href="/"
        isActive={false}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        animateScale={1}
      />
    )
    expect(screen.queryByTestId('active-indicator')).not.toBeInTheDocument()
  })
})
