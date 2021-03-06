import { React, useState, useEffect } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import { Link, Outlet, useLocation } from "react-router-dom";

import LeagueListApi from "../../API/Football/LeagueListApi";
import { StyledTableCell, StyledTableRow } from "../../Constants/Styles";
import Spinner from "../../Components/Spinner";

const LeagueList = (league) => (
  <>
    <Typography variant="h5" align="center" sx={{ mt: 2, mb: 2 }}>
      {" "}
      Top Leagues
    </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Flag</StyledTableCell>
            <StyledTableCell align="center">League Name</StyledTableCell>
            <StyledTableCell align="center">League Logo</StyledTableCell>
            <StyledTableCell align="center">Country</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {league ? (
            league.slice(0, 2).map((row) => (
              <StyledTableRow
                key={row.country_logo}
                component={Link}
                to={row.league_name}
                state={{ league: row }}
                sx={{ textDecoration: "none" }}
              >
                <StyledTableCell align="center">
                  <Avatar
                    alt="Remy Sharp"
                    src={row.country_logo}
                    sx={{ width: 80, height: 80, mx: "auto" }}
                  />
                </StyledTableCell>

                <StyledTableCell align="center">
                  {row.league_name}
                </StyledTableCell>

                <StyledTableCell align="center">
                  <Avatar
                    alt="Remy Sharp"
                    src={row.league_logo}
                    sx={{ width: 80, height: 80, mx: "auto" }}
                  />
                </StyledTableCell>

                <StyledTableCell align="center">
                  {row.country_name}
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
  </>
);

function LeaguesFootball() {
  const location = useLocation();
  const [displayTeams, setDisplayTeams] = useState(true);
  const [league, setleague] = useState(null);

  useEffect(() => {
    //check path
    location.pathname === "/Football/Series"
      ? setDisplayTeams(true)
      : setDisplayTeams(false);

    //set api
    LeagueListApi()
      .then((data) => {
        setleague(data.leagues);
      })
      .catch((err) => console.log(err));
  }, [location]);

  console.log(league);
  return (
    <>
      {displayTeams === true ? (
        <div>
          <Container maxWidth>{LeagueList(league)}</Container>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
}

export default LeaguesFootball;
