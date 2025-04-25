import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const supElement = screen.getByText(/Wassap/i);
  expect(supElement).toBeInTheDocument();
});
