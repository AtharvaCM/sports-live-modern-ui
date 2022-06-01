import React from "react";

import { useLocation } from "react-router-dom";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { COLORS } from "../../Constants/Theme";

function Player() {
  const location = useLocation();
  const { player } = location.state;
  console.log("passed player", player);

  const personalInfoCard = () => (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRight: "none",
        bgcolor: COLORS.colorLight,
      }}
    >
      <CardContent>
        <Typography variant="h5" textAlign={"center"} gutterBottom>
          Personal Information
        </Typography>
        <Typography variant="body1">
          <Typography component="span" variant="subtitle1">
            Date Of Birth:
          </Typography>{" "}
          {player.date_of_birth}
        </Typography>
        <Typography variant="body1">
          <Typography component="span" variant="subtitle1">
            Birth Place:
          </Typography>{" "}
          {player.birth_place}
        </Typography>
        <Typography variant="body1">
          <Typography component="span" variant="subtitle1">
            Role:
          </Typography>{" "}
          {player.role}
        </Typography>
      </CardContent>
    </Card>
  );

  const debutCard = () => (
    <Card
      variant="outlined"
      sx={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderLeft: "none",
        bgcolor: COLORS.colorLight,
      }}
    >
      <CardContent>
        <Typography variant="h5" textAlign={"center"} gutterBottom>
          Debut
        </Typography>
        <Typography variant="body1">
          <Typography component="span" variant="subtitle1">
            Test:
          </Typography>{" "}
          {player.batting.test.debut}
        </Typography>
        <Typography variant="body1">
          <Typography component="span" variant="subtitle1">
            ODI:
          </Typography>{" "}
          {player.batting.odi.debut}
        </Typography>
        <Typography variant="body1">
          <Typography component="span" variant="subtitle1">
            T20:
          </Typography>{" "}
          {player.batting.t20.debut}
        </Typography>
      </CardContent>
    </Card>
  );

  const avatarCard = () => (
    <Card
      variant="outlined"
      sx={{
        borderRight: "none",
        borderLeft: "none",
        bgcolor: COLORS.colorLight,
      }}
    >
      <CardContent>
        <Avatar
          src={player.img_src}
          sx={{ height: "10em", width: "10em", mx: "auto" }}
        />
        <Typography variant="h3" gutterBottom sx={{ mt: 2 }}>
          {player.name}
        </Typography>
      </CardContent>
    </Card>
  );

  const playerInfoSection = () => (
    // Outer Box
    <Box sx={{}}>
      <Grid container>
        {/* Left Col */}
        <Grid item xs={12} md={4}>
          {personalInfoCard()}
        </Grid>

        {/* Middle Col */}
        <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
          {avatarCard()}
        </Grid>

        {/* Right Col */}
        <Grid item xs={12} md={4}>
          {debutCard()}
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Container sx={{ mt: 5 }}>{playerInfoSection()}</Container>
    </>
  );
}

export default Player;
