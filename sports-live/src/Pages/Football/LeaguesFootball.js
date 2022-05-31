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

import { Link, Outlet, useLocation } from "react-router-dom";

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

<>
  
  <Typography variant="h5" align="center" sx={{mt:2}}> Top Leagues</Typography>
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
        {league ? league.slice(0, 2).map((row) => (
          <StyledTableRow key={row.country_logo}
            component={Link}
            to={row.league_name}
            state={{ league: row }}
            sx={{textDecoration:'none'}}
          >



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
  </>

)


function LeaguesFootball() {
  const location = useLocation();
  const [displayTeams, setDisplayTeams] = useState(true);
  const [league, setleague] = useState(null)

  useEffect(() => {
    //check path
    location.pathname === "/Football/Series"
      ? setDisplayTeams(true)
      : setDisplayTeams(false);

    //set api
    LeagueListApi().then((data) => {
      setleague(data.leagues)
    }).catch(err => console.log(err));
  }, [location])

  console.log(league);
  return (
    <>
      {displayTeams === true ? (
        <div className="teams-container">
          {LeagueList(league)}
        </div>
      ) : (
        <Outlet></Outlet>
      )}


    </>);
}

export default LeaguesFootball;
