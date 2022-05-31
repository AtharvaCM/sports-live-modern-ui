import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { StyledTableCell, StyledTableRow } from "../../../Constants/Styles";
import { Avatar, Typography } from "@mui/material";

function BattingRankings({ rows, matchType }) {
  //   console.log("rows", rows);
  const rankingsTable = () => (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Rank</StyledTableCell>
            <StyledTableCell align="center">Image</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(0, 24).map((row) => {
            // console.log("Row", row);
            return (
              <StyledTableRow key={row.id}>
                <StyledTableCell align="center" component="th" scope="row">
                  {matchType === "Test"
                    ? row.batting.test.ranking
                    : matchType === "ODI"
                    ? row.batting.odi.ranking
                    : matchType === "T20"
                    ? row.batting.t20.ranking
                    : "NA"}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Avatar
                    src={row.img_src}
                    sx={{ mx: "auto", height: 80, width: 80 }}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Typography variant="body1">{row.name}</Typography>
                </StyledTableCell>
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
