import React from "react";
import { Outlet } from "react-router-dom";
import CricketSubNavbar from "../../Components/Cricket/CricketSubNavbar";
import { Parallax } from "react-parallax";
import Avatar from "@mui/material/Avatar";
import { Col, Container, Row } from "react-bootstrap";

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

function Cricket() {
  const parallaxContainer = () => (
    <Parallax
      blur={{ min: -15, max: 10 }}
      bgImage={require("../../Assets/Images/Cricket/cricInfoPage.jpg")}
      bgImageAlt="CricInfo Img"
      strength={-200}
    >
      <div style={{ height: "600px" }}>
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
          height: "400px",
          background: "rgba(214,180,12,0.9)",
        }}
      >
        <Container>
          <Row>
            <Col>
              <Avatar
                alt="Remy Sharp"
                src="https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png"
                sx={{ width: 100, height: 100 }}
              />
            </Col>
            <Col>score</Col>
            <Col>
              <Avatar
                alt="Remy Sharp"
                src="https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png"
                sx={{ width: 100, height: 100 }}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </Parallax>
  );

  return (
    <>
    {/* K */}
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
