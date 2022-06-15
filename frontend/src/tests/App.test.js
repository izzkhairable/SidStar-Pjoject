import { render, screen } from '@testing-library/react';
import App from '../App';

test('Display Main Div', () => {
  render(<App />);
  expect(screen.getByText('Simplified App to Init CI')).toBeInTheDocument();
});
