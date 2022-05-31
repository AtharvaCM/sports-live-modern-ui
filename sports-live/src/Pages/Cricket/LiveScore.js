import React, { useEffect, useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import DateRangeOutlinedIcon from "@mui/icons-material/DateRangeOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

import CurrentMatchesAPI from "../../API/Cricket/CurrentMatchesAPI";
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

function LiveScore() {
  const [matches, setMatches] = useState(null);

  useEffect(() => {
    // Call the match API
    CurrentMatchesAPI()
      .then((response) => {
        setMatches(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const matchesList = () => (
    <>
      {matches === null
        ? null
        : matches.map((match, index) => (
            <Box
              sx={{
                flexGrow: 1,
                width: "80vw",
                mx: "auto",
                mb: 4,
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
                    {match.name}
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
                      Date : {match.date}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                      sx={{ display: "flex", alignItems: "center " }}
                    >
                      <PlaceOutlinedIcon /> Venue : {match.venue}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={6} md={4} sx={{ my: "auto" }}>
                  <Avatar
                    alt="Team Logo"
                    src={match.teamInfo[0].img}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant="body1" gutterBottom>
                    {match.teams[0]}
                  </Typography>
                </Grid>

                <Grid item xs={6} md={4}>
                  <Item sx={{ mt: 3 }}>
                    {match.teamInfo[0].shortname} : {match.score[0].r} /{" "}
                    {match.score[0].w} ({match.score[0].o}) <br />
                    {match.teamInfo[1].shortname} : {match.score[1].r} /{" "}
                    {match.score[1].w} ({match.score[1].o})
                  </Item>
                  <Typography variant="h6" sx={{ mt: 2 }}>
                    {match.status}
                  </Typography>
                </Grid>

                <Grid item xs={6} md={4} sx={{ my: "auto" }}>
                  <Avatar
                    alt="Team Logo"
                    src={match.teamInfo[1].img}
                    sx={{ width: 100, height: 100 }}
                  />
                  <Typography variant="body1" gutterBottom>
                    {match.teams[1]}
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

export default LiveScore;
