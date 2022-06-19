import * as React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import waypoints from '../get/waypoints';

function createData(waypoint, numberOfOccurrences) {
  return {
    waypoint: waypoint,
    numberOfOccurrences: numberOfOccurrences
  };
}

function Row(props) {
  const { row } = props;

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
    <TableContainer component={Paper} 
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