import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { Link } from "react-router-dom";

import PlayersListAPI from "../../../API/Cricket/PlayersListAPI";
import { COLORS } from "../../../Constants/Theme";

function TeamPlayers({ team }) {
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    // Call the Players API
    PlayersListAPI(team.name)
      .then((result) => {
        setPlayers(result.data);
      })
      .catch((err) => console.log(err));
  }, [team]);

  const playerList = () => (
    <Box sx={{ width: "100%", marginBottom: "50px" }}>
      <Grid
        columnSpacing={{ sm: 2, md: 3 }}
        spacing={6}
        align="center"
        container
      >
        {players === null
          ? null
          : players.map((player, index) => (
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
                    <Tooltip title="Click to view details" placement="top">
                      <CardActionArea
                        component={Link}
                        to={player.id}
                        state={{ player: player }}
                      >
                        <CardContent>
                          <Avatar
                            alt="Remy Sharp"
                            src={player.img_src}
                            sx={{ width: 80, height: 80 }}
                          />
                          <Typography variant="h6" component="div">
                            {player.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {player.role}
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
  );

  return <>{players === null ? null : playerList()}</>;
}

export default TeamPlayers;
