import { React, useState, useEffect } from 'react'
import LeagueWiseScheduleApi from '../../../API/Football/LeagueWiseScheduleApi'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


function LeagueSchedule({ league }) {
  const [leagueFixture, setleagueFixture] = useState(null)
  const key = league.league_key;

  console.log(key);

  useEffect(() => {

    LeagueWiseScheduleApi(key).then((data) => {
      setleagueFixture(data.matches);
    })

  }, [key])



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
          {leagueFixture ? leagueFixture.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.event_home_team} vs {row.event_away_team}</StyledTableCell>
              <StyledTableCell align="center">{row.event_date} / {row.event_time}</StyledTableCell>
              <StyledTableCell align="center">{row.event_status}</StyledTableCell>
              <StyledTableCell align="center">{row.event_ft_result}</StyledTableCell>
            </StyledTableRow>
          )) : ''}
        </TableBody>
      </Table>
    </TableContainer>


  )




  console.log("fixtures", leagueFixture);
  return (
    <div>{LeagueMatchSchedule()}</div>
  )
}

export default LeagueSchedule