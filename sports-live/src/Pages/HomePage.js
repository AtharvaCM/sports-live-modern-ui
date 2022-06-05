import React from "react";
import SportsImage from '../Assets/Images/sports-tools1.jpg'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HomePageItems from "./HomePageItems";


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

  return (
    <div style={STYLE.divStyle}>
      <h1 style={STYLE.h1Style}>
        <span style={{ marginTop: '100px' }}>Welcome to Sports<span style={{ color: 'orange' }}>Live </span></span>
      </h1>
      <div style={{textAlign:'center',marginBottom:'50px'}}>
        <KeyboardArrowDownIcon sx={{ color: 'white', fontSize: '60', height: '4rem', width: '4rem', textAlign: 'center' }} />
      </div>
      <HomePageItems />
    </div>


  );
}

export default HomePage;
