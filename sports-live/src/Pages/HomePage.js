import React, { useEffect, useState, useRef } from "react";

// MUI
import Collapse from "@mui/material/Collapse";

// MUI icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Assets
import SportsImage from "../Assets/Images/sports-tools1.jpg";

// Custom components
import HomePageItems from "./HomePageItems";
import Spinner from "../Components/Spinner";

function HomePage() {
  const [checked, setChecked] = useState(false);
  // For spinner
  const [loading, setLoading] = useState(true);
  const homePageItemRef = useRef();

  useEffect(() => {
    setChecked(true);
    setLoading(false);
  }, []);

  function handleDownArrowClick() {
    // Scroll to home page items
    homePageItemRef.current.scrollIntoView({
      behavior: "smooth",
    });
  }

  const showSpinner = () => <Spinner />;

  const homePageContent = () => (
    <div style={STYLE.divStyle}>
      <h1 style={STYLE.h1Style}>
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapseheight={55}
        >
          <span style={{ marginTop: "100px" }}>
            Welcome to Sports<span style={{ color: "orange" }}>Live </span>
          </span>
        </Collapse>
      </h1>

      <div style={{ textAlign: "center", marginBottom: "50px" }} id="Header">
        <KeyboardArrowDownIcon
          sx={STYLE.keyboardArrowDownIcon}
          onClick={handleDownArrowClick}
          className="btn-scroll"
        />
      </div>

      <div ref={homePageItemRef}>
        <HomePageItems />
      </div>
    </div>
  );

  return <>{loading === true ? showSpinner() : homePageContent()}</>;
}

const STYLE = {
  divStyle: {
    marginTop: "-32px",
    backgroundImage: `url(${SportsImage})`,
    backgroundRepeat: "no-repeat",
    minheight: "100vh",
    backgroundSize: "cover",
  },
  h1Style: {
    display: "flex",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    fontSize: "3rem",
    height: "50vh",
    alignItems: "center",
  },
  keyboardArrowDownIcon: {
    color: "white",
    fontSize: "60",
    height: "4rem",
    width: "4rem",
    textAlign: "center",
  },
};

export default HomePage;
