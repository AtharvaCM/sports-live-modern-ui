import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import CricketSubNavbar from "../../Components/Cricket/CricketSubNavbar";
import { COLORS } from "../../Constants/Theme";
import { Parallax } from "react-parallax";
import Avatar from "@mui/material/Avatar";
import { Container } from "react-bootstrap";
import Card from "@mui/material/Card";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "40%",
  left: "20%",
  fontSize: "4rem",
  color: "white",
  transform: "translate(-50%,-50%)",
};

const verticalAlignStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "black",
  ...theme.typography.body2,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "center",
  color: "white",
  fontSize: "20px",
}));

function Cricket() {
  const location = useLocation();

  const [displayInfo, setDisplayInfo] = useState(true);

  useEffect(() => {
    console.log("location", location.pathname);
    location.pathname === "/Cricket"
      ? setDisplayInfo(true)
      : setDisplayInfo(false);
  }, [location]);

  const parallaxContainer = () => (
    <Parallax
      blur={{ min: -15, max: 10 }}
      bgImage={require("../../Assets/Images/Cricket/cricInfoPage.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-200}
    >
      <div style={{ height: "800px", background: "rgba(0,0,0,0.3)" }}>
        <div style={insideStyles}>Cricket</div>
      </div>
    </Parallax>
  );

  const featuredMatchesCarousel = () => (
    <Parallax
      bgImage={require("../../Assets/Images/Cricket/cricInfoPage.jpg")}
      bgImageAlt="Featured Matches"
      strength={300}
      style={{
        width: "80vw",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          height: "300px",
          background: "rgba(214,180,10,0.9)",
        }}
      >
        {/* featured match section */}

        <Box
          sx={{ flexGrow: 1 }}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="40vh"
        >
          <Grid container spacing={1} align="center">
            <Grid item xs={6} md={12}>
              <h2>Featured match</h2>
            </Grid>

            <Grid item xs={6} md={4} sx={{ my: "auto" }}>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 100, height: 100 }}
              />
              India
            </Grid>

            <Grid item xs={6} md={4}>
              <h4 style={{ marginBottom: "5px" }}> Date : 25/8/2022</h4>
              <Item>
                IND : 350 / 15 (50) <br />
                RSA : 349 / 10 (50)
              </Item>
              <h4 style={{ marginTop: "5px" }}>Indian won by 10 wickets </h4>
            </Grid>

            <Grid item xs={6} md={4} sx={{ my: "auto" }}>
              <Avatar
                alt="Remy Sharp"
                src="http://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png"
                sx={{ width: 100, height: 100 }}
              />
              India
            </Grid>
          </Grid>
        </Box>
      </div>
    </Parallax>
  );

  const LatestMatchContainer = () => (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>
        Latest Matches
      </h2>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          width: "80vw",
          backgroundColor: "#FFFFFF",
          marginTop: "10px",
          borderBottom: "1px solid gray",
        }}
        className="card-hover"
      >
        <Grid
          container
          // spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Grid item xs={2} sm={4} md={4} style={verticalAlignStyle}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              sx={{ width: 80, height: 80, ml: 2 }}
            />
            <span>India</span>
          </Grid>

          <Grid item xs={2} sm={4} md={4} marginY="auto">
            <Item>
              <div>IND : 350 / 15 (50)</div>
              <div>RSA : 349 / 10 (50)</div>
            </Item>
          </Grid>

          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            align="right"
            style={verticalAlignStyle}
          >
            <span>India</span>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              sx={{ width: 80, height: 80, mr: 2 }}
            />
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{ flexGrow: 1 }}
        style={{
          width: "80vw",
          backgroundColor: "#FFFFFF",
          marginBottom: "25px",
        }}
        className="card-hover"
      >
        <Grid
          container
          // spacing={{ xs: 1, md: 1 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          <Grid item xs={2} sm={4} md={4} style={verticalAlignStyle}>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              sx={{ width: 80, height: 80, ml: 2 }}
            />
            <span>India</span>
          </Grid>

          <Grid item xs={2} sm={4} md={4} marginY="auto">
            <Item>
              <div>IND : 350 / 15 (50)</div>
              <div>RSA : 349 / 10 (50)</div>
            </Item>
          </Grid>

          <Grid
            item
            xs={2}
            sm={4}
            md={4}
            align="right"
            style={verticalAlignStyle}
          >
            <span>India</span>
            <Avatar
              alt="Remy Sharp"
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              sx={{ width: 80, height: 80, mr: 2 }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );

  const LatestNews = () => (
    <>
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImage={require("../../Assets/Images/Cricket/cricInfoPage.jpg")}
        bgImageAlt="CricInfo Img"
        strength={-200}
      >
        <div
          style={{
            height: "100vh",
            background: "rgba(219, 38, 60,0.9)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", mb: 5 }}>
            <Grid
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              align="center"
              container
            >
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
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
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </Parallax>
    </>
  );

  return (
    <>
      <CricketSubNavbar></CricketSubNavbar>
      <Outlet />
      {displayInfo === true ? (
        <>
          {parallaxContainer()}
          <div
            style={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
              marginTop: "5rem",
              marginBottom: "5rem",
              borderRadius: "5px",
            }}
          >
            {featuredMatchesCarousel()}
          </div>

          <div
            style={{
              display: "flex",
              // alignItems: "center",
              justifyContent: "center",
              marginTop: "5rem",
              marginBottom: "5rem",
              borderRadius: "5px",
            }}
          >
            <Container>{LatestMatchContainer()}</Container>
          </div>

          {LatestNews()}
        </>
      ) : null}
    </>
  );
}

export default Cricket;
