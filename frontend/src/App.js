import * as React from 'react';
import MainDrawer from './components/MainDrawer'
import Box from '@mui/material/Box';
import DrawerHeader from './components/DrawerHeader';
import DisplayAirport from './components/main/DisplayAirport';
import DisplaySidsStars from './components/main/DisplaySidsStars';
function App({ExtSelectedAirport, ExtSelectedSidOrStar}) {
	const [selectedAirport, setSelectedAirport]=React.useState(null)
	const [selectedSidOrStar, setSelectedSidOrStar]=React.useState(null)

	React.useEffect(()=>{
		setSelectedAirport(ExtSelectedAirport)
		setSelectedSidOrStar(ExtSelectedSidOrStar)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])


	return (<>
		<Box sx={{ display: 'flex' }}>
			<MainDrawer></MainDrawer>
			<Box component="main" sx={{ flexGrow: 1, p: 2 }}>
				<DrawerHeader />
				{(selectedAirport==null || selectedSidOrStar==null)?
				(<DisplayAirport setSelectedAirport={setSelectedAirport} setSelectedSidOrStar={setSelectedSidOrStar}/>):
				(<DisplaySidsStars selectedSidOrStar={selectedSidOrStar} selectedAirport={selectedAirport} setSelectedSidOrStar={setSelectedSidOrStar}/>)}
			</Box>
		</Box>
	</>)
}

export default App;
