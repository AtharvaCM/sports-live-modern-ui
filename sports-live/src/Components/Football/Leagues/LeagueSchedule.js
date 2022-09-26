import { React, useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import LeagueWiseScheduleApi from "../../../API/Football/LeagueWiseScheduleApi";
import {
  StyledTableRow,
  StyledTableCell,
} from "../../../Constants/MUITableStyleConstants";
import Spinner from "../../Spinner";

function LeagueSchedule({ league }) {
  const [leagueFixture, setleagueFixture] = useState(null);
  const key = league.league_key;

  console.log(key);

  useEffect(() => {
    LeagueWiseScheduleApi(key).then((data) => {
      setleagueFixture(data.matches);
    });
  }, [key]);

  //league schedule function

  const LeagueMatchSchedule = () => (
    //console.log(league)

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Match</StyledTableCell>
            <StyledTableCell align="center">Date / Time</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
            <StyledTableCell align="center">Final Score</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leagueFixture ? (
            leagueFixture.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">
                  {row.event_home_team} vs {row.event_away_team}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.event_date} / {row.event_time}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.event_status}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {row.event_ft_result}
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell></StyledTableCell>
              <StyledTableCell>
                <Spinner />
              </StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );

  console.log("fixtures", leagueFixture);
  return <div>{LeagueMatchSchedule()}</div>;
}

export default LeagueSchedule;
