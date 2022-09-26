import React from "react";

import { useLocation, useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  StyledTableRow,
  StyledTableCell,
} from "../../Constants/MUITableStyleConstants";
import { COLORS } from "../../Constants/themeConstants";

function Player() {
  const location = useLocation();
  const navigate = useNavigate();
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

  const battingCareerSummaryTable = () => (
    <TableContainer>
      <Typography variant="h6">Batting Career Summary</Typography>
      <Table sx={{ minWidth: 700 }} aria-label="Batting Career Summary Table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell align="right">Matches</StyledTableCell>
            <StyledTableCell align="right">Innings</StyledTableCell>
            <StyledTableCell align="right">Runs</StyledTableCell>
            <StyledTableCell align="right">High Score</StyledTableCell>
            <StyledTableCell align="right">Average</StyledTableCell>
            <StyledTableCell align="right">Strike Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Test
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.test.maches === ""
                ? "-"
                : player.batting.test.maches}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.test.innings === ""
                ? "-"
                : player.batting.test.innings}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.test.runs === "" ? "-" : player.batting.test.runs}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.test.high_score === ""
                ? "-"
                : player.batting.test.high_score}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.test.batting_avg === ""
                ? "-"
                : player.batting.test.batting_avg}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.test.sr === "" ? "-" : player.batting.test.sr}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              ODI
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.odi.maches === ""
                ? "-"
                : player.batting.odi.maches}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.odi.innings === ""
                ? "-"
                : player.batting.odi.innings}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.odi.runs === "" ? "-" : player.batting.odi.runs}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.odi.high_score === ""
                ? "-"
                : player.batting.odi.high_score}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.odi.batting_avg === ""
                ? "-"
                : player.batting.odi.batting_avg}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.odi.sr === "" ? "-" : player.batting.odi.sr}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              T20
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.t20.maches === ""
                ? "-"
                : player.batting.t20.maches}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.t20.innings === ""
                ? "-"
                : player.batting.t20.innings}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.t20.runs === "" ? "-" : player.batting.t20.runs}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.t20.high_score === ""
                ? "-"
                : player.batting.t20.high_score}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.t20.batting_avg === ""
                ? "-"
                : player.batting.t20.batting_avg}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.batting.t20.sr === "" ? "-" : player.batting.t20.sr}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const bowlingCareerSummaryTable = () => (
    <TableContainer>
      <Typography variant="h6">Bowling Career Summary</Typography>
      <Table sx={{ minWidth: 700 }} aria-label="Bowling Career Summary Table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Type</StyledTableCell>
            <StyledTableCell align="right">Matches</StyledTableCell>
            <StyledTableCell align="right">Innings</StyledTableCell>
            <StyledTableCell align="right">Wickets</StyledTableCell>
            <StyledTableCell align="right">Economy</StyledTableCell>
            <StyledTableCell align="right">Average</StyledTableCell>
            <StyledTableCell align="right">Strike Rate</StyledTableCell>
            <StyledTableCell align="right">5W</StyledTableCell>
            <StyledTableCell align="right">10W</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              Test
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.matches === ""
                ? "-"
                : player.bowling.test.matches}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.innings === ""
                ? "-"
                : player.bowling.test.innings}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.wickets === ""
                ? "-"
                : player.bowling.test.wickets}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.Economy === ""
                ? "-"
                : player.bowling.test.Economy}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.bowling_avg === ""
                ? "-"
                : player.bowling.test.bowling_avg}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.sr === "" ? "-" : player.bowling.test.sr}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.five_w === ""
                ? "-"
                : player.bowling.test.five_w}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.test.ten_w === ""
                ? "-"
                : player.bowling.test.ten_w}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              ODI
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.matches === ""
                ? "-"
                : player.bowling.odi.matches}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.innings === ""
                ? "-"
                : player.bowling.odi.innings}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.wickets === ""
                ? "-"
                : player.bowling.odi.wickets}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.Economy === ""
                ? "-"
                : player.bowling.odi.Economy}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.bowling_avg === ""
                ? "-"
                : player.bowling.odi.bowling_avg}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.sr === "" ? "-" : player.bowling.odi.sr}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.five_w === ""
                ? "-"
                : player.bowling.odi.five_w}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.odi.ten_w === "" ? "-" : player.bowling.odi.ten_w}
            </StyledTableCell>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTableCell component="th" scope="row">
              T20
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.matches === ""
                ? "-"
                : player.bowling.t20.matches}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.innings === ""
                ? "-"
                : player.bowling.t20.innings}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.wickets === ""
                ? "-"
                : player.bowling.t20.wickets}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.Economy === ""
                ? "-"
                : player.bowling.t20.Economy}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.bowling_avg === ""
                ? "-"
                : player.bowling.t20.bowling_avg}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.sr === "" ? "-" : player.bowling.t20.sr}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.five_w === ""
                ? "-"
                : player.bowling.t20.five_w}
            </StyledTableCell>
            <StyledTableCell align="right">
              {player.bowling.t20.ten_w === "" ? "-" : player.bowling.t20.ten_w}
            </StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );

  const playerInfoSection = () => (
    // Outer Box
    <Box sx={{}}>
      {/* Info Container */}
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

      {/* Table Container */}
      <Grid container sx={{ mt: 5 }}>
        <Grid item xs={12} md={12}>
          {battingCareerSummaryTable()}
        </Grid>

        <Grid item xs={12} md={12} sx={{ my: 5 }}>
          {bowlingCareerSummaryTable()}
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <>
      <Container sx={{ mt: 5 }}>
        <Box
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
          className="back-link-box"
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon
            sx={{ color: COLORS.colorPrimary }}
            className="back-link-arrow"
          />
          {/* <Link
            to={`/Cricket/Teams/${player.team}`}
            style={{ textDecoration: "none", color: COLORS.colorPrimary }}
          > */}
          <Typography
            variant="body1"
            className="back-link-text"
            sx={{ color: COLORS.colorPrimary }}
          >
            Back
          </Typography>
          {/* </Link> */}
        </Box>
        {playerInfoSection()}
      </Container>
    </>
  );
}

export default Player;
