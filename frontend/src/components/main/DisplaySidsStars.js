import * as React from 'react';
import SidStarTable from '../SidStarTable';
import WaypointTable from '../WaypointTable';
import SidStarMap from '../SidStarMap'
import { Stack } from '@mui/material';

function DisplaySidStar({selectedSidOrStar, selectedAirport}) {
	const [sidsStars, setSidsStars] = React.useState([])
	const [selectedSidOrStarDropdown, setSelectedSidOrStarDropdown] = React.useState(null)
	// const [hoveredWaypoint, setHoveredWaypoint] = React.useState(null)
	const addSidsStars = (sidStar) => {
		let copy = sidsStars
		copy.push(sidStar)
		setSidsStars(copy)
	}

	React.useEffect(()=>{
		// console.log("This is sidsStars", sidsStars)
	}, [sidsStars])

	return (<>
		<SidStarMap sidsStars={sidsStars} selectedSidOrStarDropdown={selectedSidOrStarDropdown} selectedAirport={selectedAirport}/>
		<Stack direction="row" gap={2} >
		<SidStarTable addSidsStars={addSidsStars} selectedAirport={selectedAirport} selectedSidOrStar={selectedSidOrStar} setSelectedSidOrStarDropdown={setSelectedSidOrStarDropdown}></SidStarTable>
		<WaypointTable selectedAirport={selectedAirport} selectedSidOrStar={selectedSidOrStar}></WaypointTable>
	</Stack></>)
}

export default DisplaySidStar;
