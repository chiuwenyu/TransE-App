import data from "../assets/PipeWork.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Margin } from "@mui/icons-material";

function createData(SIZE: string, SCHEDULE: string, ID: number) {
  return { SIZE, SCHEDULE, ID };
}

const rows = data.map((item) => {
  return createData(item.SIZE, item.SCHEDULE, item.ID);
});

export default function PipeManager() {
  return (
    <TableContainer component={Paper} sx={{ height: 420, width: "85%" }}>
      <Table sx={{ minWidth: 250 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow
            sx={{
              "& .MuiTableCell-root": {
                color: "white",
                backgroundColor: "secondary.main",
              },
            }}
          >
            <TableCell align="left" sx={{ width: "20%" }}>
              SIZE
            </TableCell>
            <TableCell align="center" sx={{ width: "40%" }}>
              SCHEDULE
            </TableCell>
            <TableCell align="center" sx={{ width: "40%" }}>
              ID&nbsp;(in)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ID}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {row.SIZE}
              </TableCell>
              <TableCell align="center">{row.SCHEDULE}</TableCell>
              <TableCell align="center">{row.ID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
