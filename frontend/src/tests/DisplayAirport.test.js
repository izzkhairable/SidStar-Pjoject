import { render, screen } from '@testing-library/react';
import App from '../components/main/DisplayAirport';
// import AirportTable from '../AirportTable';
// import Map from '../Map'

jest.mock("../components/AirportTable", () => ({addAirport}) => {
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
  render(<App setSelectedAirport={()=>{}}/>);
  expect(screen.getByText('MainTableMockComponent')).toBeInTheDocument();
  expect(screen.getByText('MapMockComponent')).toBeInTheDocument();
});
