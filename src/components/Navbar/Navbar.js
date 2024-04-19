import React, { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import theme from "../../theme"; // Ensure this matches your theme configuration file's location
import kc from "../../assets/img/kisspng-kansas-city-chiefs-nfl-tennessee-titans-logo-chief-5ac26ef2d328a0.3331210415226918268649.png";
import search from "../../assets/img/search-svgrepo-com.png";
import threeDots from "../../assets/img/three-dots.png";

const styles = {
  logo: {
    width: "48px",
    height: "48px",
    marginRight: "24px",
  },
  link: (isActive) => ({
    color: theme.palette.white,
    textDecoration: "none",
    marginTop: "auto",
    marginRight: "12px",
    paddingBottom: "4px",
    borderBottom: isActive ? "2px solid white" : "none",
    "&:hover": {
      borderBottom: "2px solid white",
    },
  }),
  iconButton: (isActive) => ({
    color: theme.palette.white,
    "&:hover, &.Mui-focusVisible": {
      borderBottom: "2px solid white",
    },
    paddingBottom: "4px",
    borderBottom: isActive ? "2px solid white" : "none",
  }),
};

const links = [
  { id: 1, name: "NEWS", to: "/news" },
  { id: 2, name: "VIDEOS", to: "/videos" },
  { id: 3, name: "PHOTOS", to: "/photos" },
  { id: 4, name: "PODCASTS", to: "/podcasts" },
  { id: 5, name: "SCHEDULE", to: "/schedule" },
  { id: 6, name: "TEAM", to: "/team/players-roster" },
  { id: 7, name: "STADIUM", to: "/stadium" },
  { id: 8, name: "COMMUNITY", to: "/community" },
];

const rightLinks = [
  { id: 101, name: "TICKETS", to: "/tickets" },
  { id: 102, name: "LISTEN", to: "/listen" },
  { id: 103, name: "WATCH", to: "/watch" },
  { id: 104, name: "PRO SHOP", to: "/proshop" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));

  const handleLinkClick = (id) => () => {
    setActiveLink(id);
  };

  const linkStyle = (linkId) => ({
    color: theme.palette.white,
    textDecoration: "none",
    marginTop: "auto",
    marginRight: linkId.startsWith("right") ? "12px" : "8px",
    paddingBottom: "2px",
    borderBottom: activeLink === linkId ? "2px solid white" : "none",
    "&:hover": {
      paddingBottom: "2px", // Adjust to make room for the underline without moving the text
      borderBottom: "2px solid white",
    },
  });

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.red }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <RouterLink to={"/"}>
            <Box
              component="img"
              src={kc}
              sx={{ width: "48px", height: "auto", marginRight: "24px" }}
            />
          </RouterLink>

          {/* Display links for screens wider than 1024px */}
          {!isMobile && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                marginLeft: "16px",
              }}
            >
              {links.map((link) => (
                <Link
                  component={RouterLink}
                  to={link.to}
                  key={link.id}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "16px",
                    "&:hover": {
                      borderBottom: "2px solid white",
                    },
                    borderBottom:
                      activeLink === "search" ? "2px solid white" : "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="#"
                sx={{
                  color: theme.palette.white,
                  "&:hover": {
                    borderBottom: "2px solid white",
                  },
                  borderBottom:
                    activeLink === "search" ? "2px solid white" : "none",
                }}
              >
                <img
                  src={threeDots}
                  alt="3 dots"
                  style={{ marginTop: "2px" }}
                />
              </Link>
            </Box>
          )}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Conditional rendering based on screen size */}
            <Link
              to="#"
              sx={{
                color: theme.palette.white,
                "&:hover": {
                  borderBottom: "2px solid white",
                },
                borderBottom:
                  activeLink === "search" ? "2px solid white" : "none",
              }}
            >
              <img
                src={search}
                alt="search"
                style={{ margin: "2px 8px 0 0" }}
              />
            </Link>
            {isMobile ? (
              // Mobile view: Show TICKETS, SHOP, search icon, and MoreHorizIcon
              <>
                <Link
                  component={RouterLink}
                  to="/tickets"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "8px",
                    "&:hover": {
                      borderBottom: "2px solid white",
                    },
                    borderBottom:
                      activeLink === "search" ? "2px solid white" : "none",
                  }}
                >
                  TICKETS
                </Link>
                <Box
                  sx={{
                    borderLeft: "1px solid white",
                    height: "24px",
                    marginX: "8px",
                    "&:hover": {
                      borderBottom: "2px solid white",
                    },
                    borderBottom:
                      activeLink === "search" ? "2px solid white" : "none",
                  }}
                ></Box>
                <Link
                  component={RouterLink}
                  to="/proshop"
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "8px",
                    "&:hover": {
                      borderBottom: "2px solid white",
                    },
                    borderBottom:
                      activeLink === "search" ? "2px solid white" : "none",
                  }}
                >
                  SHOP
                </Link>
                <IconButton
                  sx={{
                    padding: 0,
                    marginRight: "8px",
                    "&:hover": {
                      borderBottom: "2px solid white",
                    },
                    borderBottom:
                      activeLink === "search" ? "2px solid white" : "none",
                  }}
                >
                  <img
                    src={search}
                    alt="Search"
                    style={{ width: "24px", height: "24px" }}
                  />
                </IconButton>
                <IconButton>
                  <MoreHorizIcon sx={{ color: "white" }} />
                </IconButton>
              </>
            ) : (
              // Wider screens: Show additional rightLinks
              rightLinks.map((link) => (
                <Link
                  component={RouterLink}
                  to={link.to}
                  key={link.id}
                  sx={{
                    color: "white",
                    textDecoration: "none",
                    marginRight: "16px",
                    whiteSpace: link.name === "PRO SHOP" ? "nowrap" : "normal", // Prevent wrapping for "PRO SHOP"

                    "&:hover": {
                      borderBottom: "2px solid white",
                    },
                    borderBottom:
                      activeLink === "search" ? "2px solid white" : "none",
                  }}
                >
                  {link.name}
                </Link>
              ))
            )}
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
