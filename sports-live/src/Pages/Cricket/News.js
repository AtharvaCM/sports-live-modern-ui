import React from "react";
import { Parallax } from "react-parallax";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { COLORS } from "../../Constants/Theme";

const insideStyles = {
  background: "black",
  padding: 20,
  position: "absolute",
  top: "40%",
  left: "20%",
  fontSize: "2rem",
  color: "white",
  transform: "translate(-50%,-50%)",
};

function News() {
  const parallaxContainer = () => (
    <Parallax
      blur={{ min: -15, max: 10 }}
      bgImage={require("../../Assets/Images/Cricket/cricInfoPage.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-200}
    >
      <div style={{ height: "600px" }}>
        <div style={insideStyles}>News</div>
      </div>
    </Parallax>
  );

  const newsSection = () => (
    <Box sx={{ width: "100%", mb: 5 }}>
      <Grid columnSpacing={{ xs: 1, sm: 2, md: 1 }} align="center" container>
        <Grid item xs={12} md={12}>
          <h2 style={{ color: COLORS.colorLight }}>Latest News</h2>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, minHeight: 400 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, minHeight: 400 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card sx={{ maxWidth: 345, minHeight: 400 }}>
            <CardMedia
              component="img"
              height="140"
              image="https://images.unsplash.com/photo-1584359983106-ef9366f27454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5ld3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      {parallaxContainer()}
      {newsSection()}
    </>
  );
}

export default News;
