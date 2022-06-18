import * as React from 'react';
import MainDrawer from './components/MainDrawer'
import Box from '@mui/material/Box';
import DrawerHeader from './components/DrawerHeader';
import DisplayAirport from './components/main/DisplayAirport';
function App(props) {
	return (<>
		<Box sx={{ display: 'flex' }}>
			<MainDrawer props={props}></MainDrawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<DisplayAirport/>
			</Box>
		</Box>
	</>)
}

export default App;
