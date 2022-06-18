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
import waypoints from '../get/waypoints';

function createData(waypoint, numberOfOccurrences) {
  return {
    waypoint: waypoint,
    numberOfOccurrences: numberOfOccurrences
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
    <TableRow >
        <TableCell >
          {row.waypoint}
        </TableCell>
        <TableCell>
          {row.numberOfOccurrences}
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    numberOfOccurrences: PropTypes.string.isRequired,
  }).isRequired,
};


function CollapsibleTable({selectedSidOrStar, selectedAirport}) {
  const [rows, setRows] = React.useState([]);
    
  React.useEffect(() => {
    // console.log("I am in the useeffect")
    if(selectedAirport && selectedSidOrStar){
      // console.log("I am in the useeffec2t")
      getRows(selectedSidOrStar, selectedAirport)
    }
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedAirport, selectedSidOrStar])
  
  const getRows = async (selectedSidOrStar, selectedAirport) => await waypoints(selectedSidOrStar, selectedAirport.icao).then(
    (raw_rows) => raw_rows.map((row) => {
        return createData(row.waypoint, row.numberOfOccurrences)
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
            <TableCell>Waypoint Name</TableCell>
            <TableCell># Found in {selectedSidOrStar==='sids'? 'SID': 'STAR'}s</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CollapsibleTable