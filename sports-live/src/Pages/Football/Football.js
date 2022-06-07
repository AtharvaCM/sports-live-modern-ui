import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FootballSubNavbar from "../../Components/Football/FootballSubNavbar";

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
import Tooltip from "@mui/material/Tooltip";
import { CardActionArea } from "@mui/material";

import { COLORS } from "../../Constants/Theme";
import footballNewsApi from "../../API/Football/FootballNewsApi";
import FootballLiveScoreApi from "../../API/Football/FootballLiveScoreApi";

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

function Football() {
  const location = useLocation();
  const [newsArticles, setNewsArticles] = useState(null);
  const [displayInfo, setDisplayInfo] = useState(true);
  const [featuredMatches, setFeaturedMatches] = useState(null);

  useEffect(() => {
    console.log("location", location.pathname);
    location.pathname === "/Football"
      ? setDisplayInfo(true)
      : setDisplayInfo(false);
    // Call the news API
    footballNewsApi()
      .then((data) => {
        setNewsArticles(data.articles);
      })
      .catch((err) => console.log(err));
    // Call the FeaturedMatches API
    FootballLiveScoreApi()
      .then((response) => {
        setFeaturedMatches(response.matches);
        console.log("featuredmatch", response.matches);
      })
      .catch((err) => console.log(err));
  }, [location]);

  const parallaxContainer = () => (
    <Parallax
      blur={{ min: -15, max: 10 }}
      bgImage={require("../../Assets/Images/Football/footballCover1.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-100}
    >
      <div style={{ height: "800px", background: "rgba(0,0,0,0.3)" }}>
        <div style={insideStyles}>Football</div>
      </div>
    </Parallax>
  );

  const featuredMatchesCarousel = () => (
    <Parallax
      bgImage="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2019/10/manchester-united-vs-chelse-1572440215.jpg"
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
        {featuredMatches === null ? null : (
          <Box
            sx={{ flexGrow: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="40vh"
          >
            <Grid container spacing={1} align="center">
              <Grid item xs={6} md={12}>
                <Typography variant="h4">Featured match</Typography>
              </Grid>

              <Grid item xs={6} md={4} sx={{ my: "auto" }}>
                <Avatar
                  alt={featuredMatches[0].event_home_team}
                  src={featuredMatches[0].home_team_logo}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6" gutterBottom>
                  {featuredMatches[0].event_home_team}
                </Typography>
              </Grid>

              <Grid item xs={6} md={4}>
                <Typography variant="h5" style={{ marginBottom: "5px" }}>
                  {" "}
                  Date : {featuredMatches[0].event_date}
                </Typography>

                <Item sx={{ mt: 1.5, py: 3, width: 100 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {featuredMatches[0].event_ft_result}
                  </Typography>
                </Item>

                <Typography variant="h5" style={{ marginTop: "5px" }}>
                  Status : {featuredMatches[0].event_status}
                </Typography>
              </Grid>

              <Grid item xs={6} md={4} sx={{ my: "auto" }}>
                <Avatar
                  alt={featuredMatches[0].event_away_team}
                  src={featuredMatches[0].away_team_logo}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6" gutterBottom>
                  {featuredMatches[0].event_away_team}
                </Typography>
              </Grid>
            </Grid>
          </Box>
        )}
      </div>
    </Parallax>
  );

  const LatestMatchContainer = () => (
    <>
      <Typography
        variant="h4"
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        Latest Matches
      </Typography>
      {featuredMatches === null
        ? null
        : featuredMatches.slice(1, 5).map((match, index) => (
            <Box
              sx={{ flexGrow: 1 }}
              style={{
                width: "80vw",
                backgroundColor: "#FFFFFF",
                // marginTop: "10px",
                borderBottom: "1px solid gray",
              }}
              className="card-hover"
              key={index}
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
                    alt="Team Logo"
                    src={match.home_team_logo}
                    sx={{ width: 80, height: 80, ml: 2 }}
                  />
                  <span>{match.event_home_team}</span>
                </Grid>

                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  justifyContent="center"
                  display="flex"
                >
                  <Item
                    sx={{
                      mt: 1.4,
                      width: 100,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {match.event_ft_result}
                    </Typography>
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
                  <span>{match.event_away_team}</span>
                  <Avatar
                    alt="Team Logo"
                    src={match.away_team_logo}
                    sx={{ width: 80, height: 80, mr: 2 }}
                  />
                </Grid>
              </Grid>
            </Box>
          ))}
    </>
  );

  const LatestNews = () => (
    <>
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImage="https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738__480.jpg"
        bgImageAlt="CricInfo Img"
        strength={-100}
      >
        <div
          style={{
            height: "100vh",
            background: "rgba(219, 38, 60,0.9)",
            display: "flex",
            alignItems: "center",
          }}
        >
          {newsArticles == null ? null : (
            <Box sx={{ width: "100%", mb: 5 }}>
              <Grid
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                align="center"
                container
              >
                <Grid item xs={12} md={12}>
                  <h2 style={{ color: COLORS.colorLight }}>Latest News</h2>
                </Grid>
                {newsArticles.slice(0, 3).map((newsArticle, index) => (
                  <Grid item xs={4} key={index} sx={{ mb: 5 }}>
                    <Card
                      sx={{
                        maxWidth: 355,
                        height: 500,
                        backgroundColor: COLORS.colorLight,
                      }}
                    >
                      <Tooltip title="Open in a new page" placement="top">
                        <CardActionArea
                          component="a"
                          href={newsArticle.url}
                          target="_blank"
                        >
                          <div className="news-card">
                            <CardMedia
                              component="img"
                              height="250"
                              image={newsArticle.urlToImage}
                              alt="news"
                              className="news-card-img"
                            />
                          </div>
                          <CardContent>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="div"
                              color={COLORS.colorDark}
                            >
                              {newsArticle.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {newsArticle.description}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Tooltip>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </div>
      </Parallax>
    </>
  );

  return (
    <>
      <FootballSubNavbar></FootballSubNavbar>
      <Outlet></Outlet>

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

export default Football;
