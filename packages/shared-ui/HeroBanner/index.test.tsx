import React from 'react'
import { render, screen } from '@testing-library/react'
import HeroBanner from './index'

test('renders learn react link', () => {
  render(<HeroBanner />)
  const linkElement = screen.getByText(/Web 555/i)
  expect(linkElement).toBeInTheDocument()
})
