import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock("../components/MainDrawer", () => () => {
  return <div>MainDrawerMockComponent</div>;
});
jest.mock("../components/main/DisplayAirport", () => () => {
  return <div>DisplayAirportComponent</div>;
});

test('App Component When Loaded', () => {
  render(<App />);
  expect(screen.getByText('MainDrawerMockComponent')).toBeInTheDocument();
  expect(screen.getByText('DisplayAirportComponent')).toBeInTheDocument();
});
