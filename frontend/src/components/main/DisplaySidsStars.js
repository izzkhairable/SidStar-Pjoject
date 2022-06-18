import * as React from 'react';
import SidStarTable from '../SidStarTable';
import WaypointTable from '../WaypointTable';
import Map from '../Map'
import { Stack } from '@mui/material';

function DisplaySidStar({selectedSidOrStar, selectedAirport}) {
	return (<Stack direction="row" gap={2} >
		<SidStarTable selectedAirport={selectedAirport} selectedSidOrStar={selectedSidOrStar}></SidStarTable>
		<WaypointTable selectedAirport={selectedAirport} selectedSidOrStar={selectedSidOrStar}></WaypointTable>
	</Stack>)
}

export default DisplaySidStar;
