import React, { useEffect, useState } from "react";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

import axios from "axios";

import { Container } from "react-bootstrap";

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
      sx={{ width: "100vw", marginTop: 0 }}
      className="galley-img-list"
    >
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          component="div"
          style={{ textAlign: "center", fontSize: 20 }}
        >
          Gallery
        </ListSubheader>
      </ImageListItem>
      {images.map((item) => (
        <ImageListItem key={item.urls.full}>
          <img
            src={`${item.urls.full}?w=248&fit=crop&auto=format`}
            srcSet={`${item.urls.full}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.alt_description}
            loading="eager"
          />
          <ImageListItemBar
            title={item.alt_description}
            subtitle={item.user.name}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );

  return <>{images == null ? null : <Container>{imageList()}</Container>}</>;
}

export default Gallery;
