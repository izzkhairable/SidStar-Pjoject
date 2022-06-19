import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock("../components/MainDrawer", () => () => {
  return <div>MainDrawerMockComponent</div>;
});
jest.mock("../components/main/DisplayAirport", () => () => {
  return <div>DisplayAirportComponent</div>;
});
jest.mock("../components/main/DisplaySidsStars", () => () => {
  return <div>DisplaySidsStarsComponent</div>;
});

test('App Component When Loaded', () => {
  render(<App ExtSelectedAirport={null} ExtSelectedSidOrStar={null}/>);
  expect(screen.getByText('MainDrawerMockComponent')).toBeInTheDocument();
  expect(screen.getByText('DisplayAirportComponent')).toBeInTheDocument();
});

test('App Component After Selection', () => {
  render(<App ExtSelectedAirport={{}} ExtSelectedSidOrStar={'sids'}/>);
  expect(screen.getByText('MainDrawerMockComponent')).toBeInTheDocument();
  expect(screen.getByText('DisplaySidsStarsComponent')).toBeInTheDocument();
});
