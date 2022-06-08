import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// React Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

import {React,useState,useEffect} from 'react'

import { Outlet,useLocation } from "react-router-dom";
import HomePage from './Pages/HomePage'
import Navbar from "./Components/Navbar";

function App() {
  const location = useLocation();
  const [display, setdisplay] = useState(true);

  useEffect(()=>{
    location.pathname==='/'?setdisplay(true):setdisplay(false)
  },[location])
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
      {display === true ?<HomePage />:null }
    </>
  );
}

export default App;
