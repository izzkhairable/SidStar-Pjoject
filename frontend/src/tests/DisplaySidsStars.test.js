import { render, screen, fireEvent} from '@testing-library/react';
import App from '../components/main/DisplaySidsStars';
// import AirportTable from '../AirportTable';
// import Map from '../Map'
// import SidStarTable from '../SidStarTable';
// import WaypointTable from '../WaypointTable';
// import SidStarMap from '../SidStarMap'
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

jest.mock("../components/SidStarTable", () => ({addSidsStars}) => {
  addSidsStars({
    "name": "TOMAN2E",
    "airport": {
    "uid": "WSSS",
    "name": "WSSS",
    "lat": 1.3591666666666666,
    "lng": 103.99111111111111
    },
    "waypoints": [
    {
    "uid": "TOPOM",
    "name": "TOPOM",
    "lat": 1.4986111111111111,
    "lng": 104.04083333333334
    },
    {
    "uid": "DOKTA",
    "name": "DOKTA",
    "lat": 1.435,
    "lng": 104.17777777777778
    },
    {
    "uid": "HOSBA",
    "name": "HOSBA",
    "lat": 1.33,
    "lng": 104.405
    },
    {
    "uid": "TOMAN",
    "name": "TOMAN",
    "lat": 1.3630555555555555,
    "lng": 105.78805555555556
    }
    ]}
    )
  return <div>SidStarTableComponent</div>;
});
jest.mock("../components/WaypointTable", () => () => {
  return <div>WaypointTableComponent</div>;
});
jest.mock("../components/SidStarMap", () => () => {
  return <div>SidStarMapComponent</div>;
});

test('App Component When Loaded', () => {
  const sampleAirport={
    "uid": "WIDD",
    "name": "WIDD",
    "icao": "WIDD",
    "lat": 1.1208333333333333,
    "lng": 104.11861111111111,
    "alt": 22,
    "iata": null
    }
  render(<App selectedSidOrStar='stars' selectedAirport={sampleAirport} setSelectedSidOrStar={()=>{}}/>);
  fireEvent(
    screen.getByTestId('star-toggle'),
    new MouseEvent('click',{
      bubbles: true,
      cancelable: true,
    }),
  )
  fireEvent(
    screen.getByTestId('airport-button'),
    new MouseEvent('click',{
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(screen.getByText('SidStarTableComponent')).toBeInTheDocument();
  expect(screen.getByText('WaypointTableComponent')).toBeInTheDocument();
  expect(screen.getByText('SidStarMapComponent')).toBeInTheDocument();

});
test('App Component When Loaded return', () => {
  const sampleAirport={
    "uid": "WIDD",
    "name": "WIDD",
    "icao": "WIDD",
    "lat": 1.1208333333333333,
    "lng": 104.11861111111111,
    "alt": 22,
    "iata": null
    }
  render(<App selectedSidOrStar='sids' selectedAirport={sampleAirport} setSelectedSidOrStar={()=>{}}/>);
  fireEvent(
    screen.getByTestId('star-toggle'),
    new MouseEvent('click',{
      bubbles: true,
      cancelable: true,
    }),
  )
  fireEvent(
    screen.getByTestId('airport-button'),
    new MouseEvent('click',{
      bubbles: true,
      cancelable: true,
    }),
  )
  expect(screen.getByText('SidStarTableComponent')).toBeInTheDocument();
  expect(screen.getByText('WaypointTableComponent')).toBeInTheDocument();
  expect(screen.getByText('SidStarMapComponent')).toBeInTheDocument();

});
test('App Component When Loaded Stars', () => {
  const sampleAirport={
    "uid": "WIDD",
    "name": "WIDD",
    "icao": "WIDD",
    "lat": 1.1208333333333333,
    "lng": 104.11861111111111,
    "alt": 22,
    "iata": null
    }
  render(<App selectedSidOrStar='s' selectedAirport={sampleAirport} setSelectedSidOrStar={()=>{}}/>);
  
  expect(screen.getByText('SidStarTableComponent')).toBeInTheDocument();
  expect(screen.getByText('WaypointTableComponent')).toBeInTheDocument();
  expect(screen.getByText('SidStarMapComponent')).toBeInTheDocument();

});
