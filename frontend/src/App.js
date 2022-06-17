import * as React from 'react';
import MainDrawer from './components/MainDrawer'
import Box from '@mui/material/Box';
import DrawerHeader from './components/DrawerHeader';
import MainTable from './components/MainTable';
import Map from './components/Map'

function App(props) {
	const [airports, setAirports]=React.useState([])
	const [hoveredAirport, setHoveredAirport]=React.useState(null)
	const addAirport=(newAirport)=>{
		let copy=airports
		copy.push(newAirport)
		setAirports(copy)
	}
	return (<>
		<Box sx={{ display: 'flex' }}>
			<MainDrawer props={props}></MainDrawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<DrawerHeader />
				<Map airports={airports}hoveredAirport={hoveredAirport}/>
				<MainTable addAirport={addAirport} setHoveredAirport={setHoveredAirport}></MainTable>
			</Box>
		</Box>
	</>)
}

export default App;
