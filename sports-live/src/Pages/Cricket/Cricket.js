import React from "react";
import { Outlet } from "react-router-dom";
import CricketSubNavbar from "../../Components/Cricket/CricketSubNavbar";
import { Parallax } from "react-parallax";
import Avatar from "@mui/material/Avatar";
import { Col, Container, Row } from "react-bootstrap";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'

const insideStyles = {
  background: "black",
  padding: 20,
  position: "absolute",
  top: "40%",
  left: "20%",
  fontSize: "2rem",
  color: "white",
  transform: "translate(-50%,-50%)",
};


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'black',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'white',
  fontSize:'20px'
}));


function Cricket() {
  const parallaxContainer = () => (
    <Parallax
      blur={{ min: -15, max: 10 }}
      bgImage={require("../../Assets/Images/Cricket/cricInfoPage.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-200}
    >
      <div style={{ height: "800px"}}>
        <div style={insideStyles}>Cricket</div>
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

        
        
        <Box sx={{ flexGrow: 1 }} display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
          
          
          
          <Grid container spacing={2} align="center">

            <Grid item xs={6} md={12}>
            <h3>Featured match</h3>
            </Grid>

            <Grid item xs={6} md={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 100, height: 100 }}
              />India
            </Grid>

            <Grid item xs={6} md={4}>
            <h4 style={{marginBottom:'5px'}}> Date : 25/8/2022</h4>
            <Item>  
              IND : 350 / 15 (50) <br />
              RSA : 349 / 10 (50)
              </Item>
            <h4 style={{marginTop:'5px'}}>Indian won by 10 wickets </h4>
            </Grid>

            <Grid item xs={6} md={4}>
              <Avatar
                alt="Remy Sharp"
                src="http://geo5.net/imagens/Bandeira-da-Africa-do-Sul.png"
                sx={{ width: 100, height: 100 }}
              />
              India
            </Grid>
          </Grid>
        </Box>


      </div>
    </Parallax>
  );

  return (
    <>

      <CricketSubNavbar></CricketSubNavbar>
      <Outlet />
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
    </>
  );
}

export default Cricket;
