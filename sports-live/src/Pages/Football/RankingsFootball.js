import React from "react";

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

import FootballRankingApi from "../../API/Football/FootballRankingApi";


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




const FifaRankingTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 700 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">Ranking</StyledTableCell>
          <StyledTableCell align="center">Flag</StyledTableCell>
          <StyledTableCell align="center">Team</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {FootballRankingApi.map((row) => (
          <StyledTableRow key={row.name}>
            <StyledTableCell component="th" scope="row" align="center">
              {row.position}
            </StyledTableCell>
            <StyledTableCell align="center" sx={{ justifyContent: 'center', alignContent: 'center', display: "flex" }}>
              <Avatar
                alt="Remy Sharp"
                src={row.flag_img}
                sx={{ width: 80, height: 80 }}
              />
            </StyledTableCell>
            <StyledTableCell align="center">{row.name}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

)

function RankingsFootball() {
  return (
    <>
      <div style={{ textAlign: 'center' }}>

        <Typography variant="h4" sx={{ mt: 2, mb: 2 }}>FIFA RANKINGS</Typography>
        <Container maxWidth sx={{margin:2,marginLeft:0}}>
          {FifaRankingTable()}
        </Container>
      </div>


    </>);
}

export default RankingsFootball;
