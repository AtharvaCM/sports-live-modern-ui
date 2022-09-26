import React, { useEffect, useRef, useState } from "react";

import { Parallax } from "react-parallax";

// react router
import { Outlet, useLocation, useNavigate } from "react-router-dom";

// react bootstrap
import Container from "react-bootstrap/Container";

// MUI
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import CardActionArea from "@mui/material/CardActionArea";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { styled } from "@mui/material/styles";

// Components
import CricketSubNavbar from "../../Components/Cricket/CricketSubNavbar";
import Spinner from "../../Components/Spinner";

import NewsAPI from "../../API/Cricket/NewsAPI";
import CurrentMatchesAPI from "../../API/Cricket/CurrentMatchesAPI";

// Constants
import { COLORS } from "../../Constants/themeConstants";

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
  const navigate = useNavigate();
  const featuredMatchesRef = useRef();

  const [newsArticles, setNewsArticles] = useState(null);
  const [displayInfo, setDisplayInfo] = useState(true);
  const [featuredMatches, setFeaturedMatches] = useState(null);

  useEffect(() => {
    console.log("location", location.pathname);
    location.pathname === "/Cricket"
      ? setDisplayInfo(true)
      : setDisplayInfo(false);
    // Call the news API
    NewsAPI()
      .then((data) => {
        setNewsArticles(data.articles);
      })
      .catch((err) => console.log(err));
    // Call the FeaturedMatches API
    CurrentMatchesAPI()
      .then((response) => {
        setFeaturedMatches(response.data);
      })
      .catch((err) => console.log(err));
  }, [location]);

  function handleDownArrowClick() {
    // Scroll to home page items
    featuredMatchesRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const parallaxContainer = () => (
    <Parallax
      bgImage="https://wallpaperaccess.com/full/1088580.jpg"
      bgImageAlt="CricInfo Img"
      strength={-200}
    >
      <div style={{ height: "500px", background: "rgba(0,0,0,0.5)" }}>
        <Box
          sx={{
            height: "500px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontSize: "4rem",
            color: "white",
          }}
        >
          <div>
            <Typography variant="h2">Cricket</Typography>
            <KeyboardArrowDownIcon
              sx={{
                color: "white",
                fontSize: "60",
                height: "6rem",
                width: "6rem",
                textAlign: "center",
              }}
              onClick={handleDownArrowClick}
              className="btn-scroll"
              titleAccess="Scroll Down"
            />
          </div>
        </Box>
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
        {featuredMatches === null ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="300px"
          >
            <Spinner />
          </Box>
        ) : (
          <Box
            sx={{ flexGrow: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="300px"
          >
            <Grid container spacing={1} align="center">
              <Grid item xs={6} md={12}>
                <Typography variant="h4">Featured match</Typography>
              </Grid>

              <Grid item xs={6} md={4} sx={{ my: "auto" }}>
                <Avatar
                  alt="Team Logo"
                  src={featuredMatches[0].teamInfo[0].img}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6">
                  {featuredMatches[0].teams[0]}
                </Typography>
              </Grid>

              <Grid item xs={6} md={4}>
                <Typography variant="h5" style={{ marginBottom: "5px" }}>
                  {" "}
                  Date : {featuredMatches[0].date}
                </Typography>
                <Item>
                  {featuredMatches[0].teams[0]} :{" "}
                  {featuredMatches[0].score[0].r} /{" "}
                  {featuredMatches[0].score[0].w} (
                  {featuredMatches[0].score[0].o}) <br />
                  {featuredMatches[0].teams[1]} :{" "}
                  {featuredMatches[0].score[1].r} /{" "}
                  {featuredMatches[0].score[1].w} (
                  {featuredMatches[0].score[1].o})
                </Item>
                <Typography variant="h5" style={{ marginTop: "5px" }}>
                  {featuredMatches[0].status}
                </Typography>
              </Grid>

              <Grid item xs={6} md={4} sx={{ my: "auto" }}>
                <Avatar
                  alt="Team Logo"
                  src={featuredMatches[0].teamInfo[1].img}
                  sx={{ width: 100, height: 100 }}
                />
                <Typography variant="h6">
                  {featuredMatches[0].teams[1]}
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
      {featuredMatches === null ? (
        <Box display="flex" justifyContent="center">
          <Spinner />
        </Box>
      ) : (
        featuredMatches.slice(1, 5).map((match, index) => (
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
                "&:hover": {
                  cursor: "pointer",
                },
              }}
              onClick={() => {
                navigate("/Cricket/LiveScore");
              }}
            >
              <Grid item xs={2} sm={4} md={4} style={verticalAlignStyle}>
                <Avatar
                  alt="Team Logo"
                  src={match.teamInfo[0].img}
                  sx={{ width: 80, height: 80, ml: 2 }}
                />
                <span>{match.teams[0]}</span>
              </Grid>

              <Grid item xs={2} sm={4} md={4} marginY="auto">
                <Item>
                  <div>
                    {match.teams[0]} : {match.score[0].r} / {match.score[0].w} (
                    {match.score[0].o})
                  </div>
                  <div>
                    {match.teams[1]} : {match.score[1].r} / {match.score[1].w} (
                    {match.score[1].o})
                  </div>
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
                <span>{match.teams[1]}</span>
                <Avatar
                  alt="Team Logo"
                  src={match.teamInfo[1].img}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
              </Grid>
            </Grid>
          </Box>
        ))
      )}
    </>
  );

  const LatestNews = () => (
    <>
      <Parallax
        blur={{ min: -15, max: 10 }}
        bgImage="https://static.dezeen.com/uploads/2018/11/lords-cricket-ground-wilkinson-eyre_dezeen_2364_col_3.jpg"
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
          {newsArticles == null ? (
            <Box display="flex" justifyContent="center" sx={{ mx: "auto" }}>
              <Spinner />
            </Box>
          ) : (
            <Box sx={{ width: "100%", mb: 5 }}>
              <Grid
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                align="center"
                container
              >
                <Grid item xs={12} md={12}>
                  <Typography
                    variant="h4"
                    gutterBottom
                    style={{ color: COLORS.colorLight }}
                    sx={{ mb: 5 }}
                  >
                    Latest News
                  </Typography>
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
      <CricketSubNavbar />
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
            ref={featuredMatchesRef}
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
