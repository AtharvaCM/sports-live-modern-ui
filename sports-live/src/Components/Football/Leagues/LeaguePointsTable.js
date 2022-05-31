import { React, useState, useEffect } from 'react'
import LeagueWisePointsTableApi from '../../../API/Football/LeagueWisePointsTableApi'

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


function LeaguePointsTable({ league }) {

  console.log(league)
  const [pointsTable, setpointsTable] = useState(null)
  const key = league.league_key;
  console.log("key",key);

  useEffect(() => {
    LeagueWisePointsTableApi(key).then((data) => {

      setpointsTable(data.standings)
    }).catch(err => console.log(err))
  }, [key])


  const LeagueTable = (league) => (

    //console.log(league)

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Position</StyledTableCell>
            <StyledTableCell align="center">Team</StyledTableCell>
            <StyledTableCell align="center">Played</StyledTableCell>
            <StyledTableCell align="center">Won</StyledTableCell>
            <StyledTableCell align="center">Draw</StyledTableCell>
            <StyledTableCell align="center">Lost</StyledTableCell>
            <StyledTableCell align="center">Fouls</StyledTableCell>
            <StyledTableCell align="center">Goal Difference</StyledTableCell>
            <StyledTableCell align="center">Points</StyledTableCell>
            <StyledTableCell align="center">Last updated</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pointsTable ? pointsTable.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center">{row.standing_place}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_place}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_P}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_W}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_D}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_L}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_F}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_GD}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_PTS}</StyledTableCell>
              <StyledTableCell align="center">{row.standing_updated}</StyledTableCell>
            </StyledTableRow>
          )) : ''}
        </TableBody>
      </Table>
    </TableContainer>


  )

  console.log(pointsTable);
  return (
    <div>{LeagueTable()}</div>
  )
}

export default LeaguePointsTable