import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { PlayerBattingRankingTestAPI } from "../../API/Cricket/PlayerRankingsAPI";
import BattingRankings from "../../Components/Cricket/Rankings/BattingRankings";

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

function Rankings() {
  const [value, setValue] = useState(0);
  const [rankings, setRankings] = useState(null);

  useEffect(() => {
    // Call the Rankings API
    PlayerBattingRankingTestAPI()
      .then((response) => {
        setRankings({
          battingTest: response.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="Team tabs">
            <Tab label="Batting" {...a11yProps(0)} />
            <Tab label="Bowling" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {rankings === null ? null : (
            <BattingRankings rows={rankings.battingTest} />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          Bowling
        </TabPanel>
      </Box>
    </>
  );
}

export default Rankings;
