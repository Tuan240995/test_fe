import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';
import { Button } from '@mui/material';

function createData(name, calories, fat, carbs, protein, hx) {
    return { name, calories, fat, carbs, protein, hx };
}

const rows = [
    createData('20-11-2022', 'Ca 1', 'XMP-01', 200, 105, '51%'),
    createData('22-11-2022', 'Ca 1', 'XMP-01', 200, 200, '100%'),
    createData('23-11-2022', 'Ca 1', 'XMP-01', 200, 250, '125%'),
    createData('24-11-2022', 'Ca 1', 'XMP-01', 200, 150, '70%'),
    createData('25-11-2022', 'Ca 1', 'XMP-01', 200, 125, '70%'),
];

export default function BasicTable() {
    return (
        <>
            <h2>Bảng Thống Kê Số Liệu</h2>
            <Box
                align="left"
                component="form"
                sx={{
                    '& > :not(style)': { m: 3, width: '20ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    align="left"
                    id="date"
                    type="date"
                    label="Start to"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    align="left"
                    id="date"
                    type="date"
                    label="End to"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button variant="contained">Tìm Kiếm</Button>
            </Box>
            <TableContainer component={Paper}>

                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Ngày</TableCell>
                            <TableCell align="right">Ca làm việc</TableCell>
                            <TableCell align="right">Tên sản phẩm</TableCell>
                            <TableCell align="right">Số lượng dự kiến</TableCell>
                            <TableCell align="right">Số lượng hoàn thành</TableCell>
                            <TableCell align="right">Hiệu xuất</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                <TableCell align="right">{row.hx}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                align="right"
                sx={{
                    '& > :not(style)': { m: 3, width: '20ch' },
                }}>
                    <Button variant="contained" color="success">Export</Button>
            </Box>
        </>
    );
}