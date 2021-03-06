import React, { useEffect, useState } from "react";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import {
  TeamStatsTotalMatchesAPI,
  TeamStatsWinPercentageByYearAPI,
} from "../../../API/Cricket/TeamStatsAPI";
import { COLORS } from "../../../Constants/Theme";
import TestStats from "./Stats/TestStats";
import ODIStats from "./Stats/ODIStats";
import T20Stats from "./Stats/T20Stats";

const doughnutChartBGColors = [
  COLORS.chartGreen,
  COLORS.chartRed,
  COLORS.chartOrange,
];

const lineChartBGColors = [
  COLORS.chartPink,
  COLORS.chartRed,
  COLORS.chartOrange,
  COLORS.chartYellow,
  COLORS.chartGreen,
];

const lineChartPointRadius = 7;
const lineChartPointHoverRadius = 8;

function TeamStats({ team }) {
  // Total Matches Data
  const [chartData, setChartData] = useState(null);
  // Win Percentage By Year Data
  const [winPercentage, setWinPercentage] = useState(null);
  // For Toggle Buttons (Test, ODI, T20)
  const [alignment, setAlignment] = useState("Test");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    const getTotalMatchesData = () => {
      TeamStatsTotalMatchesAPI(team.id)
        .then((response) => {
          // const labels = Object.keys(response.stats.stats.odi).slice(1);
          const dataODI = Object.values(response.stats.stats.odi).slice(1);
          const dataTest = Object.values(response.stats.stats.test).slice(1);
          const dataT20 = Object.values(response.stats.stats.t20).slice(1);
          const labelsODI = [
            `Matches Won ${dataODI[0]}`,
            `Matches Lost ${dataODI[1]}`,
            `Matches Drawn ${dataODI[2]}`,
          ];
          const labelsTest = [
            `Matches Won ${dataTest[0]}`,
            `Matches Lost ${dataTest[1]}`,
            `Matches Drawn ${dataTest[2]}`,
          ];
          const labelsT20 = [
            `Matches Won ${dataT20[0]}`,
            `Matches Lost ${dataT20[1]}`,
            `Matches Drawn ${dataT20[2]}`,
          ];
          setChartData({
            odi: {
              labels: labelsODI,
              datasets: [
                {
                  label: `${team.name} ODI Stats`,
                  data: dataODI,
                  backgroundColor: doughnutChartBGColors,
                },
              ],
            },
            test: {
              labels: labelsTest,
              datasets: [
                {
                  label: `${team.name} Test Stats`,
                  data: dataTest,
                  backgroundColor: doughnutChartBGColors,
                },
              ],
            },
            t20: {
              labels: labelsT20,
              datasets: [
                {
                  label: `${team.name} T20 Stats`,
                  data: dataT20,
                  backgroundColor: doughnutChartBGColors,
                },
              ],
            },
            totalMatchesTest: response.stats.stats.test,
            totalMatchesODI: response.stats.stats.odi,
            totalMatchesT20: response.stats.stats.t20,
          });
        })
        .catch((err) => console.log(err));
    };

    const getWinPercentageByYearData = () => {
      TeamStatsWinPercentageByYearAPI(team.id)
        .then((response) => {
          console.log("winPerResponse", response);
          const labels = Object.keys(
            response.stats.stats.odi.win_percentage
          ).slice(0, -1);
          const dataODI = Object.values(
            response.stats.stats.odi.win_percentage
          ).slice(0, -1);
          const dataTest = Object.values(
            response.stats.stats.test.win_percentage
          ).slice(0, -1);
          const dataT20 = Object.values(
            response.stats.stats.t20.win_percentage
          ).slice(0, -1);
          setWinPercentage({
            odi: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} ODI Win Percentage By Years`,
                  data: dataODI,
                  backgroundColor: lineChartBGColors,
                  pointRadius: lineChartPointRadius,
                  pointHoverRadius: lineChartPointHoverRadius,
                  borderColor: COLORS.lineChartBorder,
                },
              ],
            },
            test: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} Test Win Percentage By Year`,
                  data: dataTest,
                  backgroundColor: lineChartBGColors,
                  pointRadius: lineChartPointRadius,
                  pointHoverRadius: lineChartPointHoverRadius,
                  borderColor: COLORS.lineChartBorder,
                },
              ],
            },
            t20: {
              labels: labels,
              datasets: [
                {
                  label: `${team.name} T20 Win Percentage By Year`,
                  data: dataT20,
                  backgroundColor: lineChartBGColors,
                  pointRadius: lineChartPointRadius,
                  pointHoverRadius: lineChartPointHoverRadius,
                  borderColor: COLORS.lineChartBorder,
                },
              ],
            },
            winPercentageByYearTest: response.stats.stats.test.win_percentage,
            winPercentageByYearODI: response.stats.stats.odi.win_percentage,
            winPercentageByYearT20: response.stats.stats.t20.win_percentage,
          });
        })
        .catch((err) => console.log(err));
    };

    getTotalMatchesData();
    getWinPercentageByYearData();
  }, [team.id, team.name]);

  const toggleButtons = () => (
    <>
      {chartData === null ? null : winPercentage === null ? null : (
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          fullWidth
        >
          <ToggleButton value="Test" fullWidth>
            Test
          </ToggleButton>
          <ToggleButton value="ODI" fullWidth>
            ODI
          </ToggleButton>
          <ToggleButton value="T20" fullWidth>
            T20
          </ToggleButton>
        </ToggleButtonGroup>
      )}
    </>
  );

  const statsContainer = () => (
    <>
      {alignment === "Test" ? (
        winPercentage === null ? null : chartData === null ? null : (
          <TestStats
            totalMatchesData={chartData.totalMatchesTest}
            totalMatchesChartData={chartData.test}
            winPercentageByYear={winPercentage.winPercentageByYearTest}
            winPercentageByYearChartData={winPercentage.test}
          />
        )
      ) : alignment === "ODI" ? (
        winPercentage === null ? null : chartData === null ? null : (
          <ODIStats
            totalMatchesData={chartData.totalMatchesODI}
            totalMatchesChartData={chartData.odi}
            winPercentageByYear={winPercentage.winPercentageByYearODI}
            winPercentageByYearChartData={winPercentage.odi}
          />
        )
      ) : alignment === "T20" ? (
        winPercentage === null ? null : chartData === null ? null : (
          <T20Stats
            totalMatchesData={chartData.totalMatchesT20}
            totalMatchesChartData={chartData.t20}
            winPercentageByYear={winPercentage.winPercentageByYearT20}
            winPercentageByYearChartData={winPercentage.t20}
          />
        )
      ) : null}
    </>
  );

  return (
    <>
      {toggleButtons()}
      {statsContainer()}
    </>
  );
}

export default TeamStats;
