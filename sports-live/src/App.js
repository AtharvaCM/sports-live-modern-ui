import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
// React Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";

import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet />
    </>
  );
}

export default App;
