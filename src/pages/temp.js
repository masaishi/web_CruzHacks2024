import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Chip from '@mui/material/Chip';
import classes from '../styles/temp.module.css';

const samples = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

// TODO create variable for pos/neut/neg to color. Create variables
// in general.
function createColoredChips(keywords) {
  return keywords.map((keyword, index) => {
    return <Chip key={index} label={keyword} variant='outlined' color='success' clickable />;
  });
}


// TODO flexwrap in Box and space out.
export default function Test({ res }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <div className='main'>
        <h1>Temp</h1>
        {createColoredChips(samples)}
      </div>
    </Box>
  );
}
