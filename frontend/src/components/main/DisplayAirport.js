import * as React from 'react';
import AirportTable from '../AirportTable';
import Map from '../Map'

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
	},[hoveredAirport])

	return (<>
		<Map airports={airports} hoveredAirport={hoveredAirport} />
		<AirportTable addAirport={addAirport} setHoveredAirport={setHoveredAirport} setSelectedSidOrStar={setSelectedSidOrStar}></AirportTable>
	</>)
}

export default DisplayAirport;
