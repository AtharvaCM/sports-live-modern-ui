import React, { useEffect, useState } from "react";
import SportsImage from '../Assets/Images/sports-tools1.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomePageItems from "./HomePageItems";
import { Collapse } from "@mui/material";


function HomePage() {

  const STYLE = {
    divStyle: {
      marginTop: '-32px',
      backgroundImage: `url(${SportsImage})`,
      backgroundRepeat: 'no-repeat',
      minheight: '100vh',
      backgroundSize: 'cover',
    },
    h1Style: {
      display: 'flex',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center',
      fontSize: '3rem',
      height: '50vh',
      alignItems: 'center'
    },

  }

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(true);
  }, [])

  return (
    <div style={STYLE.divStyle}>
      <h1 style={STYLE.h1Style} >
        <Collapse
          in={checked}
          {...(checked ? { timeout: 1000 } : {})}
          collapseHeight={55}
        >
          <span style={{ marginTop: '100px' }}>Welcome to Sports<span style={{ color: 'orange' }}>Live </span></span>
        </Collapse>
      </h1>

      <div style={{ textAlign: 'center', marginBottom: '50px' }} id="Header">
        <KeyboardArrowDownIcon sx={{ color: 'white', fontSize: '60', height: '4rem', width: '4rem', textAlign: 'center' }} />
      </div>

      <HomePageItems/>

    </div>


  );
}

export default HomePage;
