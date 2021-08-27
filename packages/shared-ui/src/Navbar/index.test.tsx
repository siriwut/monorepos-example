import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from './index'

test('renders learn react link', () => {
  render(<Navbar />)
  const linkElement = screen.getByText(/BootstrapNavbar scroll/i)
  expect(linkElement).toBeInTheDocument()
})
