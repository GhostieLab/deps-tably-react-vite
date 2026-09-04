import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export const Tably = ({ columns, data }) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((column) => (
                        <TableCell key={column.field}>
                            {column.headerName}
                        </TableCell>
                    ))}
                </TableRow>
            </TableHead>

            <TableBody>
                {data.map((row, index) => (
                    <TableRow key={index}>
                        {columns.map((column) => (
                            <TableCell key={column.field}>
                                {row[column.field]}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
