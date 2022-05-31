import {React,useEffect,useState} from 'react'
import LeagueWiseTeamsApi from '../../../API/Football/LeagueWiseTeamsApi'

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { COLORS } from "../../../Constants/Theme";

function LeagueTeams({ league }) {
    const key = league.league_key;
    const [teams, setteams] = useState([])
    //console.log(key);

    useEffect(() => {

        LeagueWiseTeamsApi(key).then((data) => {
            setteams(data.teams);
        }).catch(err => console.log(err))

    }, [key])


    const TeamList = () => (
        <div>
          <Box sx={{ width: "100%", marginBottom: "50px" }}>
            <Grid
              columnSpacing={{ sm: 2, md: 3 }}
              spacing={6}
              align="center"
              container
            >
    
              {teams === null
                ? null
                : teams.map((team, index) => (
                    <Grid item xs={12} md={3} key={index}>
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
                              
                            >
                              <CardContent>
                                <Avatar
                                  alt="Remy Sharp"
                                  src={team.team_logo}
                                  sx={{ width: 80, height: 80 }}
                                />
                                <Typography variant="h5" component="div">
                                  {team.team_name}
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

    console.log(teams);
    return (
        <>{TeamList()}</>
    )
}

export default LeagueTeams