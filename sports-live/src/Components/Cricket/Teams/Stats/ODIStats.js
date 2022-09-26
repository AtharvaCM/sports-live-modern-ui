import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

import {
  StyledTableCell,
  StyledTableRow,
} from "../../../../Constants/MUITableStyleConstants";
import { DoughnutChart, LineChart } from "../../../Chart";
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from "chart.js/auto";
// eslint-disable-next-line no-unused-vars
import { Chart } from "react-chartjs-2";

function ODIStats({
  totalMatchesData,
  totalMatchesChartData,
  winPercentageByYear,
  winPercentageByYearChartData,
}) {
  const totalMatchesTable = () => (
    <TableContainer component={Paper} sx={{ mt: 1 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Match Status</StyledTableCell>
            <StyledTableCell align="center">Total</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">Played</StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_played}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">Won</StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_won}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">Lost</StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_lost}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">Drawn</StyledTableCell>
            <StyledTableCell align="center">
              {totalMatchesData.matches_drawn}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const totalMatchesChart = () => (
    <DoughnutChart chartData={totalMatchesChartData}></DoughnutChart>
  );

  const winPercentageByYearTable = () => (
    <TableContainer component={Paper} sx={{ mt: 1 }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Year</StyledTableCell>
            <StyledTableCell align="center">Percentage</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell align="center">2018</StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2018]}%
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2019</StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2019]}%
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2020</StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2020]}%
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2021</StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2021]}%
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell align="center">2022</StyledTableCell>
            <StyledTableCell align="center">
              {winPercentageByYear[2022]}%
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const winPercentageByYearChart = () => (
    <LineChart chartData={winPercentageByYearChartData}></LineChart>
  );

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mt: 4 }}>
          Total Matches
        </Typography>
        {totalMatchesTable()}
        {totalMatchesChart()}
      </div>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5" sx={{ mt: 4 }}>
          Win Percentage Of Last 5 Years
        </Typography>
        {winPercentageByYearTable()}
        {winPercentageByYearChart()}
      </div>
    </>
  );
}

export default ODIStats;
