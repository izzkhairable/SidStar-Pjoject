import { render, screen } from '@testing-library/react';
import App from '../components/main/DisplayAirport';

jest.mock("../components/DrawerHeader", () => () => {
  return <div>DrawerHeaderMockComponent</div>;
});
jest.mock("../components/MainTable", () => ({addAirport}) => {
  console.log("This is addAirport", addAirport)
  addAirport({
    "uid": "WIDD",
    "name": "WIDD",
    "icao": "WIDD",
    "lat": 1.1208333333333333,
    "lng": 104.11861111111111,
    "alt": 22,
    "iata": null
    })
  return <div>MainTableMockComponent</div>;
});

jest.mock("../components/Map", () => () => {
  return <div>MapMockComponent</div>;
});

test('App Component When Loaded', () => {
  render(<App />);
  expect(screen.getByText('MainTableMockComponent')).toBeInTheDocument();
  expect(screen.getByText('MapMockComponent')).toBeInTheDocument();
});
