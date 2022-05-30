import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { StyledTableCell, StyledTableRow } from "../../../../Constants/Styles";

function TestStats({
  totalMatchesData,
  totalMatcheschartData,
  winPercentageByYear,
  winPercentageByYearChartData,
}) {
  const totalMatchesTable = () => (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="center">Matches Played</StyledTableCell>
            <StyledTableCell align="center">Matches Won</StyledTableCell>
            <StyledTableCell align="center">Matches Lost</StyledTableCell>
            <StyledTableCell align="center">Matches Drawn</StyledTableCell> */}

            <StyledTableCell align="center">#</StyledTableCell>
            <StyledTableCell align="center">Stat</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>

          {/* <StyledTableCell align="center">
              {totalMatchesData.matches_played}
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_won}
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_lost}
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_drawn}
            </StyledTableCell> */}

          <StyledTableRow>
            <StyledTableCell align="center">
              Matches played
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_played}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">
              Matches Won
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_won}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">
              Matches Lost
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_lost}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">
              Matches Drawn
            </StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_drawn}
            </StyledTableCell>
          </StyledTableRow>



        </TableBody>
      </Table>
    </TableContainer>
  );

  const winPercentageByYearTable = () => (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell align="center">2018</StyledTableCell>
            <StyledTableCell align="center">2019</StyledTableCell>
            <StyledTableCell align="center">2020</StyledTableCell>
            <StyledTableCell align="center">2021</StyledTableCell>
            <StyledTableCell align="center">2022</StyledTableCell> */}

            <StyledTableCell align="center">Year</StyledTableCell>
            <StyledTableCell align="center">Percentage</StyledTableCell>


          </TableRow>
        </TableHead>
        <TableBody>
          {/* <StyledTableRow>
            <StyledTableCell align="center">
              {winPercentageByYear[2018]}
            </StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2019]}
            </StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2020]}
            </StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2021]}
            </StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2022]}
            </StyledTableCell>
          </StyledTableRow> */}

          <StyledTableRow>
            <StyledTableCell align="center">2018</StyledTableCell>
            <StyledTableCell align="center">{winPercentageByYear[2018]}%</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2019</StyledTableCell>
            <StyledTableCell align="center">{winPercentageByYear[2019]}%</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2020</StyledTableCell>
            <StyledTableCell align="center">{winPercentageByYear[2020]}%</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2021</StyledTableCell>
            <StyledTableCell align="center">{winPercentageByYear[2021]}%</StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2022</StyledTableCell>
            <StyledTableCell align="center">{winPercentageByYear[2022]}%</StyledTableCell>
          </StyledTableRow>

         

        </TableBody>
      </Table>
    </TableContainer>
  );

  return (
    <>
      {totalMatchesTable()}
      {winPercentageByYearTable()}
    </>
  );
}

export default TestStats;
