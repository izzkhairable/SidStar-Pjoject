import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import sidsStars from '../get/sidsStars';

function createData(name, waypoints) {
  return {
    name,
    waypoints: waypoints,
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => {setOpen(!open);!open? props.setSelectedSidOrStarDropdown(row):props.setSelectedSidOrStarDropdown(null); }}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Waypoints
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Point</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Lat</TableCell>
                    <TableCell>Lng</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.waypoints.map((waypoint,index) => (
                    <TableRow key={waypoint.uid}>
                      <TableCell>{index+2}</TableCell>
                      <TableCell component="th" scope="row">
                        {waypoint.name}
                      </TableCell>
                      <TableCell>{waypoint.lat}</TableCell>
                      <TableCell>{waypoint.lng}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
      name:PropTypes.string.isRequired,
      waypoints: PropTypes.arrayOf(
        PropTypes.shape({
          uid: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          lat: PropTypes.number.isRequired,
          lng: PropTypes.number.isRequired,

        }),
      )
  }).isRequired,
};


function CollapsibleTable({selectedSidOrStar, selectedAirport, addSidsStars, setSelectedSidOrStarDropdown}) {
  const [rows, setRows] = React.useState([]);
    
  React.useEffect(() => {
    // console.log("I am in the useeffect")
    if(selectedAirport && selectedSidOrStar){
      // console.log("I am in the useeffec2t")
      getRows(selectedSidOrStar, selectedAirport)
    }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedAirport, selectedSidOrStar])
  
  const getRows = async (selectedSidOrStar, selectedAirport) => await sidsStars(selectedSidOrStar, selectedAirport.icao).then(
    (raw_rows) => raw_rows.map((row) => {
        addSidsStars(row)
        return createData(row.name, row.waypoints)
    }))
    .then((rows) => {
        setRows(rows)
        return
    })
  return (
    <TableContainer component={Paper} sx={{
      height: 400    
    }}
  >
      <Table aria-label="collapsible table" sx={{height:400, overflow:'auto'}} stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>{selectedSidOrStar==='sids'? 'SID': 'STAR'} Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} setSelectedSidOrStarDropdown={setSelectedSidOrStarDropdown} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable