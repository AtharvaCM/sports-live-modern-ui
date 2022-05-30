import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { Link, Outlet, useLocation } from "react-router-dom";

import { COLORS } from "../../Constants/Theme";
import TeamsListAPI from "../../API/Cricket/TeamsListAPI";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  fontSize: "4rem",
  color: "white",
  transform: "translate(-50%,-50%)",
};

function Teams() {
  const location = useLocation();
  const [teams, setTeams] = useState(null);
  const [displayTeams, setDisplayTeams] = useState(true);

  useEffect(() => {
    // Check the path
    location.pathname === "/Cricket/Teams"
      ? setDisplayTeams(true)
      : setDisplayTeams(false);
    // call the TeamsList API
    TeamsListAPI()
      .then((response) => {
        setTeams(response.teams);
      })
      .catch((err) => console.log(err));
  }, [location]);

  const parallaxContainer = () => (
    <Parallax
      blur={{ min: -15, max: 10 }}
      bgImage={require("../../Assets/Images/Cricket/cricketTeamsGroupPhoto.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-200}
    >
      <div
        style={{
          height: "800px",
          background: "rgba(0,0,0,0.3)",
        }}
      >
        <div style={insideStyles}>Teams</div>
      </div>
    </Parallax>
  );

  const TeamList = () => (
    <div>
      <Box sx={{ width: "100%", marginBottom: "50px" }}>
        <Grid
          columnSpacing={{ sm: 2, md: 3 }}
          spacing={6}
          align="center"
          container
        >
          <Grid item xs={12} md={12}>
            <h2 style={{ color: COLORS.colorDark, marginTop: "100px" }}>
              Teams
            </h2>
          </Grid>

          {teams === null
            ? null
            : teams.map((team, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box
                    sx={{
                      minWidth: 175,
                      maxWidth: 250,
                    }}
                  >
                    <Card
                      variant="outlined"
                      sx={{ backgroundColor: COLORS.colorLight }}
                    >
                      <Tooltip title="Click to view more" placement="top">
                        <CardActionArea
                          component={Link}
                          to={team.name}
                          state={{ team: team }}
                        >
                          <CardContent>
                            <Avatar
                              alt="Remy Sharp"
                              src={team.flag}
                              sx={{ width: 80, height: 80 }}
                            />
                            <Typography variant="h5" component="div">
                              {team.name}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Tooltip>
                    </Card>
                  </Box>
                </Grid>
              ))}
        </Grid>
      </Box>
    </div>
  );

  return (
    <>
      {displayTeams === true ? (
        <div className="teams-container">
          {parallaxContainer()}
          <Container>{TeamList()}</Container>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
    </>
  );
}

export default Teams;
