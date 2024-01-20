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

function createColoredChips(keywords) {
  let chip_color = [];
  let colored_chips = [];

  keywords.forEach((element) => {
    switch (element) {
      case 'positive':
        chip_color.push('success');
        break;
      case 'negative':
        chip_color.push('error');
        break;
      default:
        chip_color.push('info');
    }
  });

  for (let i = 0; i < keywords.length; i++) {
    colored_chips.push(
      <Chip
        label={keywords[i]}
        variant='outlined'
        color={chip_color[i]}
        onClick={() => console.log('clicked')}
        clickable
      />
    );
  }
  return colored_chips;
}

export default function Test({ res }) {
  return (
    <Box m='0.50rem'>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'left',
          alignContent: 'space-between',
          gap: 1,
        }}
      >
        {createColoredChips(samples)}
      </Box>
    </Box>
  );
}
