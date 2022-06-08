import React from "react";
import cricketImg from "../Assets/Images/Cricket/cricInfoPage.jpg";
import footballImg from "../Assets/Images/Football/footballCover1.jpg";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid, Tooltip } from "@mui/material";

function HomePageItems() {
  return (
    <div id="home-page-items">
      <Box
        sx={{ flexGrow: 1 }}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <Grid
          container
          spacing={1}
          align="center"
          marginBottom={10}
          marginTop={15}
        >
          <Grid item xs={6} md={6}>
            <Tooltip title="Go to Cricket Section" placement="top">
              <Card
                sx={{
                  maxWidth: 400,
                  height: 500,
                  background: "rgb(0,0,0,0.8)",
                  color: "white",
                }}
              >
                <CardActionArea
                  component={Link}
                  to="/Cricket"
                  sx={{ cursor: "pointer", textDecoration: "none" }}
                >
                  <div className="news-card">
                    <CardMedia
                      component="img"
                      alt="cricket"
                      height="280"
                      image={cricketImg}
                      className="news-card-img"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Cricket
                    </Typography>
                    <Typography variant="body2" color="#ddd">
                      Cricket is a team sport that is played outdoors. Cricket
                      originated in England and gradually became popular across
                      the globe. This sport requires complete physical fitness
                      and athleticism to play. The sport is played between two
                      teams of 11 players each.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Tooltip>
          </Grid>
          <Grid item xs={6} md={6}>
            <Tooltip title="Go to Football Section" placement="top">
              <Card
                sx={{
                  maxWidth: 400,
                  height: 500,
                  background: "rgb(0,0,0,0.8)",
                  color: "white",
                }}
              >
                <CardActionArea
                  component={Link}
                  to="/Football"
                  sx={{ cursor: "pointer", textDecoration: "none" }}
                >
                  <div className="news-card">
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="280"
                      image={footballImg}
                      className="news-card-img"
                    />
                  </div>
                  <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                      Football
                    </Typography>
                    <Typography variant="body2" color="#ddd">
                      Football is the most popular sport worldwide. It is also
                      called “soccer” in some countries. It is an outdoor game
                      that requires absolute athleticism as players have to
                      hustle and run across the field with the ball throughout
                      the game. The name of the sport was derived by the way it
                      is played.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default HomePageItems;
