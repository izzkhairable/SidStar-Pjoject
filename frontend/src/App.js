import * as React from 'react';
import MainDrawer from './components/MainDrawer'
import Box from '@mui/material/Box';
import DrawerHeader from './components/DrawerHeader';
import MainTable from './components/MainTable';
import Map from './components/Map'

function App(props) {

	return (<>
		<Box sx={{ display: 'flex' }}>
			<MainDrawer props={props}></MainDrawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Map/>
				<MainTable></MainTable>
			</Box>
		</Box>
	</>)
}

export default App;
