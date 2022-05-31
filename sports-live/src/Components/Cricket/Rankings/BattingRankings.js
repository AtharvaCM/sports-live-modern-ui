import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { StyledTableCell, StyledTableRow } from "../../../Constants/Styles";

function BattingRankings({ rows }) {
  //   console.log("rows", rows);
  const rankingsTable = () => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Rank</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 24).map((row) => {
            console.log("Row", row);
            return (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.batting.test.ranking}
                </StyledTableCell>
                <StyledTableCell align="right">{row.img_src}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <>
      {rows === null
        ? rows === undefined
          ? null
          : rankingsTable()
        : rankingsTable()}
    </>
  );
}

export default BattingRankings;
