import * as React from 'react';
import SidStarTable from '../SidStarTable';
import WaypointTable from '../WaypointTable';
import SidStarMap from '../SidStarMap'
import { Stack, Button, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowBack from '@mui/icons-material/ArrowBack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function DisplaySidStar({selectedSidOrStar, selectedAirport, setSelectedSidOrStar}) {
	const [sidsStars, setSidsStars] = React.useState([])
	const [selectedSidOrStarDropdown, setSelectedSidOrStarDropdown] = React.useState(null)

	const handleChange = (event, newAlignment) => {
	  setSelectedSidOrStar(newAlignment);
	};
	// const [hoveredWaypoint, setHoveredWaypoint] = React.useState(null)
	const addSidsStars = (sidStar) => {
		let copy = sidsStars
		copy.push(sidStar)
		setSidsStars(copy)
	}

	React.useEffect(()=>{
		// console.log("This is sidsStars", sidsStars)
	}, [sidsStars])

	return (<Stack spacing={2}>
			<Stack direction="row" spacing={1}>
				<Typography variant='h5' sx={{fontWeight: 'bold'}}>{selectedAirport.icao} -</Typography>
				<Typography variant='h5'>{selectedSidOrStar=='stars'? 'Standard Terminal Arrival Route':'Standard Instrument Departure Route'}</Typography>
			</Stack>
			
			<SidStarMap sidsStars={sidsStars} selectedSidOrStarDropdown={selectedSidOrStarDropdown} selectedAirport={selectedAirport} selectedSidOrStar={selectedSidOrStar} height={'50vh'}/>
			<Stack direction="row" spacing={2}>
				<Button data-testid="airport-button" size="small" variant="outlined" sx={{width:250}} onClick={()=>{setSelectedSidOrStar(null)}}startIcon={<ArrowBackIcon />}>Back to Airports</Button>
			
				<ToggleButtonGroup
				color="primary"
				value={selectedSidOrStar}
				exclusive
				onChange={handleChange}
				>
					<ToggleButton value="sids" data-testid="sid-toggle">SID</ToggleButton>
					<ToggleButton value="stars" data-testid="star-toggle">STAR</ToggleButton>
				</ToggleButtonGroup>
				
			</Stack>
			
			<Stack direction="row" sx={{height:'40vh'  }}>
				<SidStarTable addSidsStars={addSidsStars} selectedAirport={selectedAirport} selectedSidOrStar={selectedSidOrStar} setSelectedSidOrStarDropdown={setSelectedSidOrStarDropdown}></SidStarTable>
				<WaypointTable selectedAirport={selectedAirport} selectedSidOrStar={selectedSidOrStar} ></WaypointTable>
			</Stack>
	</Stack>)
}

export default DisplaySidStar;
