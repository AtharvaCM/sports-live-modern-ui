import React, { useEffect, useState } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import axios from "axios";

import { COLORS } from "../../Constants/Theme";
import Spinner from "../../Components/Spinner";

const URL =
  "https://api.unsplash.com/search/photos?page=1&per_page=30&query=cricket&client_id=J-xAGd8R7QHuRsKiznwL6R-yhGK8-X64-Oj0HG1A9Q0";

function Gallery() {
  const [images, setImages] = useState(null);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  const imageList = () => (
    <ImageList
      sx={{ mt: 0, mx: 0, px: 0, width: "100vw" }}
      className="galley-img-list"
    >
      <ImageListItem key="Subheader" cols={6}>
        <ListSubheader
          component="div"
          sx={{
            textAlign: "center",
            fontSize: "3rem",
            color: COLORS.colorDark,
            py: 2,
          }}
        >
          Gallery
        </ListSubheader>
      </ImageListItem>
      {images.map((item) => (
        <ImageListItem key={item.urls.full}>
          <img
            src={`${item.urls.small_s3}?w=248&fit=crop&auto=format`}
            srcSet={`${item.urls.small_s3}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.alt_description}
            loading="eager"
          />
          <ImageListItemBar
            title={item.alt_description}
            subtitle={`@${item.user.name}`}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

  return (
    <>
      <Container maxWidth sx={{ px: "0 !important" }}>
        {images == null ? (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="60vh"
          >
            <Spinner />
          </Box>
        ) : (
          imageList()
        )}
      </Container>
    </>
  );
}

export default Gallery;
