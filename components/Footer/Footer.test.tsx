import { render, screen, fireEvent } from '@testing-library/react'
import Footer from './Footer'

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('../../hooks/useThemeToggle', () => {
  return () => ({
    theme: 'light',
    toggleTheme: () => console.log('Toggle theme'),
  })
})
describe('Footer', () => {
  beforeEach(() => {
    const usePathname = jest.requireMock('next/navigation').usePathname
    usePathname.mockReturnValue('/')
  })

  it('renders the footer component', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute(
      'href',
      '/me'
    )
    expect(
      screen.getByRole('button', { name: 'Toggle theme' })
    ).toBeInTheDocument()
  })

  it('calls the onClick handler when the button is clicked', () => {
    const consoleSpy = jest.spyOn(console, 'log')
    render(<Footer />)
    const button = screen.getByRole('button', { name: 'Toggle theme' })
    fireEvent.click(button)
    expect(consoleSpy).toHaveBeenCalledWith('Toggle theme')
  })
})
