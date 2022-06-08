import React, { useEffect, useState } from "react";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import {
  PlayerBattingRankingODIAPI,
  PlayerBattingRankingT20API,
  PlayerBattingRankingTestAPI,
  PlayerBowlingRankingODIAPI,
  PlayerBowlingRankingT20API,
  PlayerBowlingRankingTestAPI,
} from "../../API/Cricket/PlayerRankingsAPI";
import BattingRankings from "../../Components/Cricket/Rankings/BattingRankings";
import BowlingRankings from "../../Components/Cricket/Rankings/BowlingRankings";
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

function Rankings() {
  const [value, setValue] = useState(0);
  const [battingTestRankings, setBattingTestRankings] = useState(null);
  const [battingODIRankings, setBattingODIRankings] = useState(null);
  const [battingT20Rankings, setBattingT20Rankings] = useState(null);
  const [bowlingTestRankings, setBowlingTestRankings] = useState(null);
  const [bowlingODIRankings, setBowlingODIRankings] = useState(null);
  const [bowlingT20Rankings, setBowlingT20tRankings] = useState(null);
  // For Toggle Buttons (Test, ODI, T20)
  const [alignment, setAlignment] = useState("Test");

  const handleToggleButtonChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    // For Batting Sort
    const sortPlayersByBattingRanking = (playerList, matchType) => {
      const result = playerList.sort((playerOne, playerTwo) => {
        let PlayerOneRank =
          matchType === "Test"
            ? playerOne.batting.test.ranking
            : matchType === "ODI"
            ? playerOne.batting.odi.ranking
            : matchType === "T20"
            ? playerOne.batting.t20.ranking
            : 0;
        let PlayerTwoRank =
          matchType === "Test"
            ? playerTwo.batting.test.ranking
            : matchType === "ODI"
            ? playerTwo.batting.odi.ranking
            : matchType === "T20"
            ? playerTwo.batting.t20.ranking
            : 0;
        if (Number(PlayerOneRank) < Number(PlayerTwoRank)) {
          return -1;
        } else if (Number(PlayerOneRank) > Number(PlayerTwoRank)) {
          return 1;
        } else {
          return 0;
        }
      });
      return result;
    };

    // For Bowling Sort
    const sortPlayersByBowlingRanking = (playerList, matchType) => {
      const result = playerList.sort((playerOne, playerTwo) => {
        let PlayerOneRank =
          matchType === "Test"
            ? playerOne.bowling.test.ranking
            : matchType === "ODI"
            ? playerOne.bowling.t20.ranking
            : matchType === "T20"
            ? playerOne.bowling.t20.ranking
            : 0;
        let PlayerTwoRank =
          matchType === "Test"
            ? playerTwo.bowling.test.ranking
            : matchType === "ODI"
            ? playerTwo.bowling.t20.ranking
            : matchType === "T20"
            ? playerTwo.bowling.t20.ranking
            : 0;
        if (Number(PlayerOneRank) < Number(PlayerTwoRank)) {
          return -1;
        } else if (Number(PlayerOneRank) > Number(PlayerTwoRank)) {
          return 1;
        } else {
          return 0;
        }
      });
      return result;
    };

    // Call the Rankings API
    PlayerBattingRankingTestAPI()
      .then((testResponse) => {
        setBattingTestRankings(
          sortPlayersByBattingRanking(testResponse.data.slice(0, 10), "Test")
        );
      })
      .catch((err) => console.log(err));

    PlayerBattingRankingODIAPI()
      .then((odiResponse) => {
        setBattingODIRankings(
          sortPlayersByBattingRanking(odiResponse.data.slice(0, 10), "ODI")
        );
      })
      .catch((err) => console.log(err));

    PlayerBattingRankingT20API()
      .then((t20Response) => {
        setBattingT20Rankings(
          sortPlayersByBattingRanking(t20Response.data.slice(0, 10), "T20")
        );
      })
      .catch((err) => console.log(err));

    PlayerBowlingRankingTestAPI()
      .then((testResponse) => {
        setBowlingTestRankings(
          sortPlayersByBowlingRanking(testResponse.data.slice(0, 20), "Test")
        );
      })
      .catch((err) => console.log(err));

    PlayerBowlingRankingODIAPI()
      .then((odiResponse) => {
        setBowlingODIRankings(
          sortPlayersByBowlingRanking(odiResponse.data.slice(0, 15), "ODI")
        );
      })
      .catch((err) => console.log(err));

    PlayerBowlingRankingT20API()
      .then((t20Response) => {
        setBowlingT20tRankings(
          sortPlayersByBowlingRanking(t20Response.data.slice(0, 20), "T20")
        );
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleButtons = () => (
    <Box sx={{ mx: 3, mt: 3 }}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleToggleButtonChange}
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
    </Box>
  );

  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} aria-label="Team tabs">
            <Tab label="Batting" {...a11yProps(0)} />
            <Tab label="Bowling" {...a11yProps(1)} />
          </Tabs>
        </Box>
        {toggleButtons()}
        <TabPanel value={value} index={0}>
          {battingTestRankings === null ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight="30vh"
            >
              <Spinner />
            </Box>
          ) : (
            <BattingRankings
              rows={
                alignment === "Test"
                  ? battingTestRankings
                  : alignment === "ODI"
                  ? battingODIRankings
                  : alignment === "T20"
                  ? battingT20Rankings
                  : []
              }
              matchType={
                alignment === "Test"
                  ? "Test"
                  : alignment === "ODI"
                  ? "ODI"
                  : alignment === "T20"
                  ? "T20"
                  : []
              }
            />
          )}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {battingTestRankings === null ? (
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight="30vh"
            >
              <Spinner />
            </Box>
          ) : (
            <BowlingRankings
              rows={
                alignment === "Test"
                  ? bowlingTestRankings
                  : alignment === "ODI"
                  ? bowlingODIRankings
                  : alignment === "T20"
                  ? bowlingT20Rankings
                  : []
              }
              matchType={
                alignment === "Test"
                  ? "Test"
                  : alignment === "ODI"
                  ? "ODI"
                  : alignment === "T20"
                  ? "T20"
                  : []
              }
            />
          )}
        </TabPanel>
      </Box>
    </>
  );
}

export default Rankings;
