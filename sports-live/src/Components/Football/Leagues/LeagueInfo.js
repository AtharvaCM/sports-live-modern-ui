import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import LeagueSchedule from "./LeagueSchedule";
import LeagueTeams from "./LeagueTeams";
import LeaguePointsTable from "./LeaguePointsTable";
import { COLORS } from "../../../Constants/Theme";

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

function LeagueInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);
  const league = location.state.league;
  console.log("league", league);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 3,
          mx: 3,
          width: "95vw",
        }}
        className="back-link-box"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon
          sx={{ color: COLORS.colorPrimary }}
          className="back-link-arrow"
        />
        <Typography
          variant="body1"
          className="back-link-text"
          sx={{ color: COLORS.colorPrimary }}
        >
          Back
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Chip
          label={league.league_name}
          variant="outlined"
          avatar={
            <Avatar
              alt="img"
              src={league.league_logo}
              sx={{ height: "2rem !important", width: "2rem !important" }}
            />
          }
          sx={{ fontSize: "2rem", py: 3, justifySelf: "center" }}
        />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="Team tabs">
            <Tab label="Schedule" {...a11yProps(0)} />
            <Tab label="Teams" {...a11yProps(1)} />
            <Tab label="Points Table" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <LeagueSchedule league={league}></LeagueSchedule>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LeagueTeams league={league}></LeagueTeams>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LeaguePointsTable league={league}></LeaguePointsTable>
        </TabPanel>
      </Box>
    </>
  );
}

export default LeagueInfo;
