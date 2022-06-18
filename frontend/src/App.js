import * as React from 'react';
import MainDrawer from './components/MainDrawer'
import Box from '@mui/material/Box';
import DrawerHeader from './components/DrawerHeader';
import DisplayAirport from './components/main/DisplayAirport';
import DisplaySidsStars from './components/main/DisplaySidsStars';
function App(props) {
	const [selectedAirport, setSelectedAirport]=React.useState(null)
	const [selectedSidOrStar, setSelectedSidOrStar]=React.useState(null)

	return (<>
		<Box sx={{ display: 'flex' }}>
			<MainDrawer props={props}></MainDrawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				{(selectedAirport==null || selectedSidOrStar==null)?
				(<DisplayAirport setSelectedAirport={setSelectedAirport} setSelectedSidOrStar={setSelectedSidOrStar}/>):
				(<DisplaySidsStars selectedSidOrStar={selectedSidOrStar} selectedAirport={selectedAirport}/>)}
			</Box>
		</Box>
	</>)
}

export default App;
