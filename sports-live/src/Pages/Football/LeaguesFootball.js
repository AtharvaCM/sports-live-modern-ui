import { React, useState, useEffect } from "react";

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import LeagueListApi from "../../API/Football/LeagueListApi";


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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));




const LeagueList = (league) => (

  //console.log(league)

  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">Flag</StyledTableCell>
          <StyledTableCell align="center">Country</StyledTableCell>
          <StyledTableCell align="center">League Logo</StyledTableCell>
          <StyledTableCell align="center">League Name</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {league ? league.slice(0,2).map((row) => (
          <StyledTableRow key={row.country_logo}>



            <StyledTableCell align="center">
              <Avatar
                alt="Remy Sharp"
                src={row.country_logo}
                sx={{ width: 80, height: 80, mx: 'auto' }}
              />
            </StyledTableCell>

            <StyledTableCell align="center">
              {row.country_name}
            </StyledTableCell>

            <StyledTableCell align="center" >
              <Avatar
                alt="Remy Sharp"
                src={row.league_logo}
                sx={{ width: 80, height: 80, mx: 'auto' }}
              />
            </StyledTableCell>


            <StyledTableCell align="center">{row.league_name}</StyledTableCell>

          </StyledTableRow>
        )) : ''}
      </TableBody>
    </Table>
  </TableContainer>


)


function LeaguesFootball() {
  const [league, setleague] = useState(null)

  useEffect(() => {
    LeagueListApi().then((data) => {
      setleague(data.leagues)
    }).catch(err => console.log(err));
  }, [])

  console.log(league);
  return (
    <>
      <div style={{ textAlign: 'center' }}>

        <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>Top Leagues</Typography>
        <Container maxWidth sx={{ margin: 2, marginLeft: 0 }}>
          {league === null ? null : LeagueList(league)}
        </Container>
      </div>


    </>);
}

export default LeaguesFootball;
