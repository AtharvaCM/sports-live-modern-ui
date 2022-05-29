import React from "react";
import { Parallax } from "react-parallax";
import { COLORS } from "../../Constants/Theme";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Container } from "@mui/material";

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


const verticalAlignStyle = {
  display: "block",
  alignItems: "center",
  justifyContent: "center",
  padding:'0px',
  marginTop:'40px'
};


function Teams() {

  const parallaxContainer = () => (
    <Parallax
      blur={{ min: -15, max: 10 }}
      bgImage={require("../../Assets/Images/Cricket/cricInfoPage.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-200}
    >
      <div style={{ height: "800px" }}>
        <div style={insideStyles}><h2>Meet the Teams</h2></div>
      </div>
    </Parallax>
  )

  const TeamList = () => (
    <>

      <div>
        <Box sx={{ width: "100%",marginBottom:'50px'}}>
          <Grid
            columnSpacing={{ sm: 2, md: 3 }}
            spacing={6}
            align="center"
            container
           
          >
            <Grid item xs={12} md={12}>
              <h2 style={{ color: COLORS.colorDark }}>Teams</h2>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item" >
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{marginLeft:'15px',fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80 }}
              />
              <span style={{marginLeft:'15px',fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80 }}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80 }}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>

            <Grid item xs={3} style={verticalAlignStyle} className="teams-grid-item">
              <Avatar
                alt="Remy Sharp"
                src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                sx={{ width: 80, height: 80}}
              />
              <span style={{fontWeight:'bold'}}>India</span>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  )


  return (
    <>
      {parallaxContainer()}
      <Container>{TeamList()}</Container>
    </>
  );
}

export default Teams;
