import React, { useEffect, useRef, useState } from "react";
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
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { Link, Outlet, useLocation } from "react-router-dom";

import { COLORS } from "../../Constants/themeConstants";
import TeamsListAPI from "../../API/Cricket/TeamsListAPI";
import Spinner from "../../Components/Spinner";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function Teams() {
  const teamsRef = useRef();
  const location = useLocation();
  const [teams, setTeams] = useState(null);
  const [displayTeams, setDisplayTeams] = useState(true);
  const [value, setValue] = React.useState(0);

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleDownArrowClick() {
    // Scroll to home page items
    teamsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const parallaxContainer = () => (
    <Parallax
      bgImage={require("../../Assets/Images/Cricket/cricketTeamsGroupPhoto.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-300}
    >
      <div
        style={{
          height: "500px",
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <Box
          sx={{
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "4rem",
            color: "white",
          }}
        >
          <div>
            <Typography variant="h2">Teams</Typography>
            <KeyboardArrowDownIcon
              sx={{
                color: "white",
                fontSize: "60",
                height: "6rem",
                width: "6rem",
                textAlign: "center",
              }}
              onClick={handleDownArrowClick}
              className="btn-scroll"
              titleAccess="Scroll Down"
            />
          </div>
        </Box>
      </div>
    </Parallax>
  );

  const TeamList = () => (
    <div ref={teamsRef}>
      <Box sx={{ width: "100%", marginBottom: "50px" }}>
        <Typography
          variant="h4"
          gutterBottom
          sx={{ color: COLORS.colorDark, my: 10 }}
          align="center"
        >
          Teams
        </Typography>

        {/* Tabs */}

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Teams tab"
            centered
          >
            <Tab label="Men" {...a11yProps(0)} />
            <Tab label="Women" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {/* Mens Team */}
          {teams === null ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight="40vh"
              mx="auto"
            >
              <Spinner />
            </Box>
          ) : (
            <Grid
              columnSpacing={{ sm: 2, md: 3 }}
              spacing={6}
              align="center"
              container
            >
              {teams.map((team, index) => (
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
          )}
          {/* Mens Team END */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box
            sx={{
              height: "50vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5" gutterBottom align="center">
              Coming Soon...
            </Typography>
          </Box>
        </TabPanel>
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
