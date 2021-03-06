import React from "react";

import { Link, useLocation } from "react-router-dom";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Avatar } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import TeamSchedule from "./TeamSchedule";
import TeamPlayers from "./TeamPlayers";
import TeamStats from "./TeamStats";
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

function TeamInfo() {
  const location = useLocation();
  const { team } = location.state;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box
        sx={{ display: "flex", alignItems: "center", mt: 2, ml: 2 }}
        className="back-link-box"
      >
        <ArrowBackIcon
          sx={{ color: COLORS.colorPrimary }}
          className="back-link-arrow"
        />
        <Link
          to="/Cricket/Teams"
          style={{ textDecoration: "none", color: COLORS.colorPrimary }}
        >
          <Typography variant="body1" className="back-link-text">
            Back to Teams
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Chip
          label={team.name}
          variant="outlined"
          avatar={
            <Avatar
              alt={team.name}
              src={team.flag}
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
            <Tab label="Players" {...a11yProps(1)} />
            <Tab label="Stats" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <TeamSchedule team={team} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TeamPlayers team={team} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TeamStats team={team} />
        </TabPanel>
      </Box>
    </>
  );
}

export default TeamInfo;
