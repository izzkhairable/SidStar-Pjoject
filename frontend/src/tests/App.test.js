import { render, screen } from '@testing-library/react';
import App from '../App';

test('Sanity Test', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 5 })).toBeInTheDocument();
});
