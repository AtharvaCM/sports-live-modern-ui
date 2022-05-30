import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SportsIcon from "@mui/icons-material/Sports";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { Link, useLocation } from "react-router-dom";

import { COLORS } from "../Constants/Theme";

const pages = ["Home", "Cricket", "Football"];

const Navbar = () => {
  const location = useLocation();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [pathName, setPathName] = useState("/Cricket");

  useEffect(() => {
    console.log("navbar location", location.pathname);
    setPathName(location.pathname);
  }, [location]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: COLORS.colorPrimary }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SportsIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, fontSize: "3em" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Sports Live
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={`/${page}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <SportsIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1, fontSize: "3em" }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Sports Live
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={`/${page}`}
                style={{
                  textDecoration: "none",
                  color:
                    pathName.includes(`/${page}`) === true
                      ? COLORS.colorDark
                      : COLORS.colorLight,
                }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    mx: 2,
                    color:
                      pathName.includes(`/${page}`) === true
                        ? COLORS.colorDark
                        : COLORS.colorLight,
                    display: "block",
                  }}
                  variant="contained"
                >
                  {page}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
