import ColoredChips from '../components/Chips';
import Box from '@mui/material/Box';

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
    <Box display='flex' justifyContent='center' alignContent='space'>
      <Box border='solid' borderColor='red' width='30%'>
        <ColoredChips />
      </Box>
      <Box border='solid' borderColor='blue' width='30%'>
        <ColoredChips />
      </Box>
      <Box border='solid' borderColor='green' width='30%'>
        <ColoredChips />
      </Box>
    </Box>
  );
}
