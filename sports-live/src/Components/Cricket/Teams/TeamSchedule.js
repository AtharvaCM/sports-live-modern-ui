import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import TeamScheduleAPI from "../../../API/Cricket/TeamScheduleAPI";
import Spinner from "../../Spinner";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TeamSchedule({ team }) {
  const [schedule, setSchedule] = useState(null);
  console.log("team", team);

  useEffect(() => {
    // call the Schedule API
    TeamScheduleAPI(team.name)
      .then((response) => {
        setSchedule(response.schedule);
      })
      .catch((err) => console.log(err));
  }, [team.name]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Match</StyledTableCell>
            <StyledTableCell align="left">Match Status</StyledTableCell>
            <StyledTableCell align="left">Venue</StyledTableCell>
            <StyledTableCell align="left">Date</StyledTableCell>
            <StyledTableCell align="left">Match Type</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedule === null ? (
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>
                <Spinner />
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          ) : (
            schedule.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
                <StyledTableCell align="left">{row.venue}</StyledTableCell>
                <StyledTableCell align="left">{row.date}</StyledTableCell>
                <StyledTableCell align="left">{row.matchType}</StyledTableCell>
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TeamSchedule;
