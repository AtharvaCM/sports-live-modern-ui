import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { useEffect } from "react";

import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "./Components/Navbar";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // When the page loads redirect to /Home
    navigate("/Home");
  }, [navigate]);

  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default App;
