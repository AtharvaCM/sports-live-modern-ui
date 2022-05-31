import React from 'react'
import { useLocation } from "react-router-dom";

import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import { Avatar } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

import LeagueSchedule from './LeagueSchedule'
import LeagueTeams from './LeagueTeams';
import LeaguePointsTable from './LeaguePointsTable';


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
    const [value, setValue] = React.useState(0);
    const league = location.state.league;
    console.log('league', league);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 2,
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
                    <LeagueSchedule></LeagueSchedule>
                </TabPanel>
                <TabPanel value={value} index={1}>
                   <LeagueTeams league={league}></LeagueTeams>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <LeaguePointsTable league={league}></LeaguePointsTable>
                </TabPanel>
            </Box>
        </>
    )
}

export default LeagueInfo