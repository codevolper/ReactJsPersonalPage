import { BrowserRouter as Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />, { wrapper: Router })
  const linkElement = screen.getByText(/home/i)
  expect(linkElement).toBeInTheDocument()
})
