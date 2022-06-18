import * as React from 'react';
import MainTable from '../MainTable';
import Map from '../Map'

function DisplayAirport(props) {
	const [airports, setAirports] = React.useState([])
	const [hoveredAirport, setHoveredAirport] = React.useState(null)
	const addAirport = (newAirport) => {
		let copy = airports
		copy.push(newAirport)
		setAirports(copy)
	}
	return (<>

		<Map airports={airports} hoveredAirport={hoveredAirport} />
		<MainTable addAirport={addAirport} setHoveredAirport={setHoveredAirport}></MainTable>

	</>)
}

export default DisplayAirport;
