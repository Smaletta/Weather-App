import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(date, temperature, summary, windSpeed, uvi) {
    return { date, temperature, summary, windSpeed, uvi };
}

const rows = [
    createData('Monday', 159, 6.0, 24, 4.0),
    createData('Tuesday', 237, 9.0, 37, 4.3),
    createData('Wednesday', 262, 16.0, 24, 6.0),
    createData('Thursday', 305, 3.7, 67, 4.3),
    createData('Friday', 356, 16.0, 49, 3.9),
];

export default function DataTable() {
    return (
        <TableContainer class="table-auto bg-blue-500" component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">temperature</TableCell>
                        <TableCell align="right">summary&nbsp;(g)</TableCell>
                        <TableCell align="right">windSpeed&nbsp;(g)</TableCell>
                        <TableCell align="right">uvi&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.date}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.date}
                            </TableCell>
                            <TableCell align="right">{row.temperature}</TableCell>
                            <TableCell align="right">{row.summary}</TableCell>
                            <TableCell align="right">{row.windSpeed}</TableCell>
                            <TableCell align="right">{row.uvi}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
