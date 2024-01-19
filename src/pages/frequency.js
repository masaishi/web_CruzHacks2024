import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export const getServerSideProps = async () => {
  const response = await fetch("http://127.0.0.1:8000/word-frequency");
  const res = await response.json();
  return {
    props: { res },
  };
};

export default function Test({ res }) {
	return (
		<Box sx={{ display: 'flex', margin: '5rem' }}>
			<TableContainer component={Paper}>
				<Table sx={{ minWidth: 650 }} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Words</TableCell>
							<TableCell align="left">Count</TableCell>
							<TableCell align="left">Examples</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{res.map((row) => (
							<TableRow
								key={row.word}
								sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
							>
								<TableCell component="th" scope="row">
									{row.word}
								</TableCell>
								<TableCell align="left">{row.count}</TableCell>
								<TableCell align="left">{row.examples}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	)
}