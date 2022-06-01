import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';

import LiveScoreFootballApi from "../../API/Football/FootballLiveScoreApi";
import { COLORS } from "../../Constants/Theme";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: COLORS.colorDark,
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: "white",
  fontSize: "20px",
}));

function LiveScoreFootball() {
  
  const [liveMatches,setliveMatches] = useState(null);

  useEffect(() => {
    // Call the match API
    LiveScoreFootballApi()
      .then((response) => {
        setliveMatches(response.matches);
        
      })
      .catch((err) => console.log(err));

      
  }, []);

  console.log(liveMatches);
  const matchesList = () => (
    <>
      {liveMatches === null
        ? null
        : liveMatches.map((match, index) => (
            <Box
              sx={{
                flexGrow: 1,
                width: "95vw",
                mx: "auto",
                mb: 4,
                cursor:'pointer'
              }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              minHeight="40vh"
              key={index}
            >
              <Grid
                container
                spacing={1}
                align="center"
                sx={{
                  backgroundColor: COLORS.colorLight,
                  borderRadius: "5px",
                  pb: 2,
                  "&:hover": {
                    boxShadow: 3,
                  },
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
                    {match.event_home_team}  VS  {match.event_away_team}
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
                    alt="Team Logo"
                    src={match.home_team_logo}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant="body1" gutterBottom>
                    {match.event_home_team}
                  </Typography>
                </Grid>

                <Grid item xs={6} md={4}>
                  <Item sx={{ mt: 3 ,height:40,width:100}} >
                    <Typography sx={{mt:0.5,fontWeight:'bold'}} variant="h5">{match.event_ft_result}</Typography>
                  </Item>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {match.event_status}
                  </Typography>
                </Grid>

                <Grid item xs={6} md={4} sx={{ my: "auto" }}>
                  <Avatar
                    alt="Team Logo"
                    src={match.away_team_logo}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant="body1" gutterBottom>
                    {match.event_away_team}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
    </>
  );

  return (
    <>
      <Box sx={{ mt: 4 }}>{matchesList()}</Box>
    </>
  );
}

export default LiveScoreFootball;
