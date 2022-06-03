import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";

import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import { COLORS } from "../../Constants/Theme";
import NewsAPI from "../../API/Cricket/NewsAPI";

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "40%",
  left: "20%",
  fontSize: "4rem",
  color: "white",
  transform: "translate(-50%,-50%)",
};

function News() {
  const [newsArticles, setNewsArticles] = useState(null);

  useEffect(() => {
    // Call the news API
    NewsAPI()
      .then((data) => {
        setNewsArticles(data.articles);
      })
      .catch((err) => console.log(err));
  }, []);

  const parallaxContainer = () => (
    <Parallax
      bgImage="https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1605&q=80"
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
          <h2 style={{ color: COLORS.colorDark }}>Latest News</h2>
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
      {newsArticles === null ? null : newsSection()}
    </>
  );
}

export default News;
