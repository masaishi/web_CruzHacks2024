import ColoredChips from '../components/chips';
import Box from '@mui/material/Box';

export default function temp() {
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
