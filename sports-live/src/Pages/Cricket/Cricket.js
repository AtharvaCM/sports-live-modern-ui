import React from "react";
import { Outlet } from "react-router-dom";
import CricketSubNavbar from "../../Components/Cricket/CricketSubNavbar";

function Cricket() {
  return (
    <>
      <CricketSubNavbar></CricketSubNavbar>
      <Outlet />
    </>
  );
}

export default Cricket;
