import React from 'react'
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
import { StyledTableRow, StyledTableCell } from "../../Constants/Styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function FootballTeamInfo() {
    const location = useLocation();
    const { team } = location.state;
    console.log("team passed", team.coaches);

    const teamSquadInfo = () => (
        <TableContainer>
            <Typography variant="h6">Team Squad</Typography>
            <Table sx={{ minWidth: 700 }} aria-label="Team Squad Table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="right">Sr. No</StyledTableCell>
                        <StyledTableCell align="right">Name</StyledTableCell>
                        <StyledTableCell align="right">Jersy Number</StyledTableCell>
                        <StyledTableCell align="right">Country</StyledTableCell>
                        <StyledTableCell align="right">Player Type</StyledTableCell>
                        <StyledTableCell align="right">Age</StyledTableCell>
                        <StyledTableCell align="right">Matches Played</StyledTableCell>
                        <StyledTableCell align="right">Goal Scored</StyledTableCell>
                        <StyledTableCell align="right">Yellow Cards</StyledTableCell>
                        <StyledTableCell align="right">Red Cards</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {team ? team.players.map((player, index) => {
                        return (
                            <>
                            <StyledTableRow>
                                <StyledTableCell component="th" scope="row" align="right">{index+1}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_name === '' || player.player_name === null?'NA':player.player_name}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_number === '' || player.player_number === null?'-':player.player_number}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_country === null?'-':player.player_country}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_type === null || player.player_type === ''?'-':player.player_type}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_age === null || player.player_age === ''?'-':player.player_age}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_match_played === null || player.player_match_played === ''?'-':player.player_match_played}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_goals === null || player.player_goals === ''?'-':player.player_goals}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_yellow_cards === null || player.player_yellow_cards === ''?'-':player.player_yellow_cards}</StyledTableCell>
                                <StyledTableCell component="th" scope="row" align="right">{player.player_red_cards === null || player.player_red_cards === ''?'-':player.player_red_cards}</StyledTableCell>
                            </StyledTableRow>
                            </>
                        )
                    }):'data not found'}

                </TableBody>
            </Table>
        </TableContainer>

    )

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
                    src={team.team_logo}
                    sx={{ height: "10em", width: "10em", mx: "auto" }}
                />
                <Typography variant="h3" gutterBottom sx={{ mt: 2 ,textAlign:"center"}}>
                    {team.team_name}
                </Typography>
                <Typography varient="h5" gutterBottom sx={{textAlign:'center'}}>
                    Coach : {team.coaches.length === 0?'NA':team.coaches[0].coach_name === ''|| team.coaches[0].coach_name === null ?'NA':team.coaches[0].coach_name} 
                </Typography>
            </CardContent>
        </Card>
    );

    const teamInfoSection = () => (
        // Outer Box
        <Box sx={{}}>
            {/* Info Container */}
            <Grid container>
                <Grid item xs={12} md={12}>
                    {avatarCard()}
                </Grid>
            </Grid>

            {/* Table Container */}
            <Grid container sx={{ mt: 5 }}>
                <Grid item xs={12} md={12}>
                    {teamSquadInfo()}
                </Grid>


            </Grid>
        </Box>
    );
    return (
        <>
            <Container sx={{ mt: 5 }} maxWidth>{teamInfoSection()}</Container>
        </>
    )
}

export default FootballTeamInfo