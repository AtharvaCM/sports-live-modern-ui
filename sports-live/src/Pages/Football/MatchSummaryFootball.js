import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography, Card, CardContent } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";

import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CampaignOutlinedIcon from "@mui/icons-material/CampaignOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";

import { COLORS } from "../../Constants/Theme";
import { Timeline } from "../../Components/Football/Match/Timeline";
import { BarChart, StackedBarChart, PieChart } from "../../Components/Chart";
import { MatchStatsAPI } from "../../API/Football/MatchStatsAPI";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: COLORS.colorDark,
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: "white",
  fontSize: "20px",
}));

const doughnutChartBGColors = [
  COLORS.chartGreen,
  COLORS.chartRed,
  COLORS.chartOrange,
];

function MatchSummaryFootball() {
  const location = useLocation();
  const { match } = location.state;
  console.log("match passed", match);

  const [subsData, setSubsData] = useState(null);
  const [attacksData, setAttacksData] = useState(null);
  const [dangerousAttacksData, setDangerousAttacksData] = useState(null);
  const [goalscorers, setGoalscorers] = useState(null);
  const [totalAttacksData, setTotalAttacksData] = useState(null);

  useEffect(() => {
    const getMatchStats = () => {
      console.log("match_key", match.event_key);
      MatchStatsAPI(match.event_key)
        .then((response) => {
          // for subs data
          if (response.match.statistics[0] !== undefined) {
            const labels = Object.keys(response.match.statistics[0]).slice(1);
            const data = Object.values(response.match.statistics[0]).slice(1);
            setSubsData({
              labels: labels,
              datasets: [
                {
                  label: `Substitutions`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                  barThickness: 50,
                },
              ],
            });
          }

          // for attacks data
          if (response.match.statistics[1] !== undefined) {
            const labels = Object.keys(response.match.statistics[1]).slice(1);
            const data = Object.values(response.match.statistics[1]).slice(1);
            setAttacksData({
              labels: labels,
              datasets: [
                {
                  label: `Attacks`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                  barThickness: 50,
                },
              ],
            });
          }

          // for dangerous attacks data
          if (response.match.statistics[2] !== undefined) {
            const labels = Object.keys(response.match.statistics[2]).slice(1);
            const data = Object.values(response.match.statistics[2]).slice(1);
            setDangerousAttacksData({
              labels: labels,
              datasets: [
                {
                  label: `Dangerous Attacks`,
                  data: data,
                  backgroundColor: doughnutChartBGColors,
                },
              ],
            });
          }

          // for total attacks
          if (
            response.match.statistics[3] !== undefined &&
            response.match.statistics[4] !== undefined
          ) {
            const labels = [
              response.match.event_home_team,
              response.match.event_away_team,
            ];
            const onTargetData = [
              Object.values(response.match.statistics[3]).slice(1, 2)[0],
              Object.values(response.match.statistics[3]).slice(2, 3)[0],
            ];
            const offTargetData = [
              Object.values(response.match.statistics[4]).slice(1, 2)[0],
              Object.values(response.match.statistics[4]).slice(2, 3)[0],
            ];

            setTotalAttacksData({
              labels: labels,
              datasets: [
                {
                  label: `On Target`,
                  data: onTargetData,
                  backgroundColor: [COLORS.chartGreen],
                  barThickness: 50,
                  stack: "Stack 0",
                },
                {
                  label: `Off Target`,
                  data: offTargetData,
                  backgroundColor: [COLORS.chartRed],
                  barThickness: 50,
                  stack: "Stack 1",
                },
              ],
            });
          }

          // for goals
          if (response.match.goalscorers !== undefined) {
            const data = response.match.goalscorers.map((goal) => {
              const goalTime = Object.values(goal).slice(0, 1)[0];
              const scorer =
                Object.values(goal).slice(1, 2)[0] === ""
                  ? Object.values(goal).slice(6, 7)[0]
                  : Object.values(goal).slice(1, 2)[0];
              const team =
                Object.values(goal).slice(1, 2)[0] === ""
                  ? response.match.event_away_team
                  : response.match.event_home_team;

              return {
                date: goalTime,
                event: scorer,
                team: team,
              };
              // console.log(data);
            });
            console.log("goals", data);
            setGoalscorers(data);
          }
        })
        .catch((err) => console.log(err));
    };

    getMatchStats();
  }, [match.event_key]);

  const matchCard = () => (
    <Box
      sx={{
        flexGrow: 1,
        width: "95vw",
        mx: "auto",
        my: 4,
      }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="40vh"
    >
      <Grid
        container
        spacing={1}
        align="center"
        sx={{
          backgroundColor: COLORS.colorLight,
          borderRadius: "5px",
          pb: 2,
        }}
      >
        <Grid
          item
          xs={6}
          md={12}
          sx={{
            backgroundColor: COLORS.lineChartBorder,
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        >
          <Typography variant="h5" gutterBottom>
            {match.event_home_team} VS {match.event_away_team}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center " }}
            >
              <DateRangeOutlinedIcon />
              Date : {match.event_date}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center " }}
            >
              <CampaignOutlinedIcon /> League : {match.league_name}
            </Typography>

            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center " }}
            >
              <OutlinedFlagIcon /> Season : {match.league_season}
            </Typography>
            <Typography
              variant="subtitle1"
              gutterBottom
              sx={{ display: "flex", alignItems: "center " }}
            >
              <PlaceOutlinedIcon /> Venue : {match.event_stadium}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={6} md={4} sx={{ my: "auto" }}>
          <Avatar
            alt={match.event_home_team}
            src={match.home_team_logo}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="body1" gutterBottom>
            {match.event_home_team}
          </Typography>
        </Grid>

        <Grid item xs={6} md={4}>
          <Item
            sx={{
              mt: 3,
              height: 50,
              width: 100,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold" }} variant="h5">
              {match.event_ft_result}
            </Typography>
          </Item>
          <Typography variant="h6" sx={{ mt: 2 }}>
            {match.event_status}
          </Typography>
        </Grid>

        <Grid item xs={6} md={4} sx={{ my: "auto" }}>
          <Avatar
            alt={match.event_away_team}
            src={match.away_team_logo}
            sx={{ width: 100, height: 100 }}
          />
          <Typography variant="body1" gutterBottom>
            {match.event_away_team}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  const goalTimeline = () => (
    <Box>
      <Timeline events={goalscorers} />
    </Box>
  );

  const subsChart = () => {
    return <BarChart chartData={subsData} title={`Substitutions`}></BarChart>;
  };

  const attacksChart = () => {
    return <BarChart chartData={attacksData} title={`Attacks`}></BarChart>;
  };

  const dangerousAttacksChart = () => {
    return (
      <PieChart
        chartData={dangerousAttacksData}
        title={`Dangerous Attacks`}
      ></PieChart>
    );
  };

  const statsContainer = () => {
    return (
      <Box sx={{ mx: 4 }}>
        <Typography variant="h6">Match Stats</Typography>
        <Card>
          <CardContent>
            <Grid container>
              {/* Column 1 */}
              <Grid item sm={12} md={6}>
                {subsData === null ? null : subsChart()}
              </Grid>

              {/* Column 2 */}
              <Grid item sm={12} md={6}>
                {attacksData === null ? null : attacksChart()}
              </Grid>

              {/* Column 3 */}
              <Grid item sm={12} md={12}>
                {dangerousAttacksData === null ? null : dangerousAttacksChart()}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  };

  const totalAttacksChart = () => {
    return (
      <>
        <StackedBarChart
          chartData={totalAttacksData}
          title={`${match.event_home_team} vs ${match.event_away_team}`}
        ></StackedBarChart>
      </>
    );
  };

  const totalAttacksContainer = () => {
    return (
      <Box sx={{ m: 4 }}>
        <Typography variant="h6">Total Attacks</Typography>
        <Card>
          <CardContent>
            {totalAttacksData === null ? null : totalAttacksChart()}
          </CardContent>
        </Card>
      </Box>
    );
  };

  return (
    <div>
      {match === undefined ? null : matchCard()}
      {match === undefined ? null : goalTimeline()}
      {match === undefined ? null : statsContainer()}
      {match === undefined ? null : totalAttacksContainer()}
    </div>
  );
}

export default MatchSummaryFootball;
