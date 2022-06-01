import React, { useEffect, useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { FixedSizeList } from "react-window";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { COLORS } from "../../Constants/Theme";
import PlayersListAPI from "../../API/Cricket/PlayersListAPI";
import { Avatar } from "@mui/material";

const pages = ["LiveScore", "Rankings", "Series", "Gallery", "News", "Teams"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "25ch",
      },
    },
  },
}));

const CricketSubNavbar = () => {
  const location = useLocation();
  let navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [pathName, setPathName] = useState("/Cricket");
  const [playerList, setPlayerList] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    console.log("location", location.pathname);
    setPathName(location.pathname);

    // Call PlayerList API
    PlayersListAPI()
      .then((response) => {
        setPlayerList(response.data);
      })
      .catch((err) => console.log(err));
  }, [location]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const routeChange = (player) => {
    console.log("routeChanger", player);
    navigate("/Cricket/Player", { state: { player: player } });
  };

  function renderRow(props) {
    const { data, index, style } = props;
    // console.log("data", data);

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton onClick={() => routeChange(data[index])}>
          <Avatar src={data[index].img_src} />
          <ListItemText sx={{ ml: 2 }} primary={data[index].name} />
        </ListItemButton>
      </ListItem>
    );
  }

  const fixedSizeList = () => (
    <Box
      sx={{
        width: "100%",
        height: 300,
        maxWidth: 280,
        bgcolor: COLORS.colorLight,
        position: "absolute",
        top: "133px",
        right: 0,
        zIndex: 15,
        mr: 6,
        display: searchInput === "" ? "none" : "block",
      }}
    >
      {playerList === null ? null : (
        <FixedSizeList
          height={300}
          width={280}
          itemSize={55}
          itemCount={
            playerList.filter((player) => {
              if (searchInput === "") {
                return false;
              } else if (
                player.name.toLowerCase().includes(searchInput.toLowerCase())
              ) {
                return true;
              } else {
                return false;
              }
            }).length
          }
          itemData={playerList.filter((player) => {
            if (searchInput === "") {
              return false;
            } else if (
              player.name.toLowerCase().includes(searchInput.toLowerCase())
            ) {
              return true;
            } else {
              return false;
            }
          })}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      )}
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: COLORS.colorPrimary }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
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
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      to={`/Cricket`}
                      style={{
                        textDecoration: "none",
                        color:
                          pathName === "/Cricket"
                            ? COLORS.colorDark
                            : COLORS.colorLight,
                      }}
                    >
                      Info
                    </Link>
                  </Typography>
                </MenuItem>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link
                        to={`/Cricket/${page}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link
                to={`/Cricket`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 0,
                    display: "block",
                    color:
                      pathName === "/Cricket"
                        ? COLORS.colorDark
                        : COLORS.colorLight,
                  }}
                  variant="text"
                >
                  Info
                </Button>
              </Link>
              {pages.map((page) => (
                <Link
                  to={`/Cricket/${page}`}
                  style={{ textDecoration: "none", color: "white" }}
                  key={page}
                >
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 0,
                      display: "block",
                      color:
                        pathName.includes(`/Cricket/${page}`) === true
                          ? COLORS.colorDark
                          : COLORS.colorLight,
                    }}
                    variant="text"
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>
            <Search sx={{ mr: 3 }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Player…"
                inputProps={{ "aria-label": "search player" }}
                onChange={handleSearchInput}
              />
            </Search>
          </Toolbar>
        </Container>
      </AppBar>
      {fixedSizeList()}
    </>
  );
};
export default CricketSubNavbar;
