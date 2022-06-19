import * as React from 'react';
import AirportTable from '../AirportTable';
import Map from '../Map'
import { Stack} from '@mui/material';

function DisplayAirport({setSelectedAirport, setSelectedSidOrStar}) {
	const [airports, setAirports] = React.useState([])
	const [hoveredAirport, setHoveredAirport] = React.useState(null)
	const addAirport = (newAirport) => {
		let copy = airports
		copy.push(newAirport)
		setAirports(copy)
	}

	React.useEffect(()=>{
		setSelectedAirport(hoveredAirport)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[hoveredAirport])

	return (<Stack spacing={2}>
		<Map airports={airports} hoveredAirport={hoveredAirport} height={'50vh'} />
		<AirportTable addAirport={addAirport} setHoveredAirport={setHoveredAirport} setSelectedSidOrStar={setSelectedSidOrStar} style={{height: '50vh'}}></AirportTable>
	</Stack>)
}

export default DisplayAirport;
