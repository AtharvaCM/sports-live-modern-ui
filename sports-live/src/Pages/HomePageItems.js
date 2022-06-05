import React from 'react'
import cricketImg from '../Assets/Images/Cricket/cricInfoPage.jpg'
import footballImg from '../Assets/Images/Football/footballCover1.jpg'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

function HomePageItems() {
    return (
        <div >
            <Box sx={{ flexGrow: 1 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="40vh"
            >
                <Grid container spacing={1} align="center"  marginBottom={10} marginTop={3}>
                    <Grid item xs={6} md={6}>
                        <Card sx={{ maxWidth: 400, height: 450, background: 'rgb(0,0,0,0.8)', color: 'white' }} >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="280"
                                image={cricketImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Cricket
                                </Typography>
                                <Typography variant="body2" color="#ddd">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} md={6}>
                        <Card sx={{ maxWidth: 400, height: 450, background: 'rgb(0,0,0,0.8)', color: 'white' }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="280"
                                image={footballImg}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div">
                                    Football
                                </Typography>
                                <Typography variant="body2" color="#ddd">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

            </Box>



        </div>
    )
}

export default HomePageItems