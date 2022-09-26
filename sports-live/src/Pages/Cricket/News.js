import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { COLORS } from "../../Constants/themeConstants";
import NewsAPI from "../../API/Cricket/NewsAPI";
import Spinner from "../../Components/Spinner";

function News() {
  const newsRef = useRef();
  const [newsArticles, setNewsArticles] = useState(null);

  useEffect(() => {
    // Call the news API
    NewsAPI()
      .then((data) => {
        setNewsArticles(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleDownArrowClick() {
    // Scroll to home page items
    newsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const parallaxContainer = () => (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
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
            <Typography variant="h2">News</Typography>
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

  const newsSection = () => (
    <Box sx={{ width: "100%", mb: 5 }} ref={newsRef}>
      <Grid columnSpacing={{ xs: 1, sm: 2, md: 1 }} align="center" container>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: COLORS.colorDark, my: 4 }}
          >
            Latest News
          </Typography>
        </Grid>

        {newsArticles.map((newsArticle, index) => (
          <Grid item xs={6} key={index} sx={{ mb: 5 }}>
            <Card
              sx={{
                maxWidth: 555,
                height: 400,
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
  );

  return (
    <>
      {parallaxContainer()}
      {newsArticles === null ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="40vh"
        >
          <Spinner />
        </Box>
      ) : (
        newsSection()
      )}
    </>
  );
}

export default News;
