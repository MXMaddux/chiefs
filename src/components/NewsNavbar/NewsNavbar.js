import React, { useState } from "react";
import {
  AppBar,
  Box,
  Link,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import theme from "../../theme";

const styles = {
  link: {
    color: theme.palette.black,
    margin: "16px",
    textDecoration: "none",
    whiteSpace: "nowrap", // Keeps the link text in a single line
    "&:hover": {
      textDecoration: "underline",
    },
  },
  linkDiv: {
    display: "flex",
    width: "100%",
    overflowX: "auto", // Enables horizontal scrolling
    overflowY: "hidden", // Disables vertical scrolling
    alignItems: "center",
  },
  innerPadding: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0 16px 0 96px", // Applied padding here
    width: "100%",
  },
};

const links = [
  { id: 1, name: "All News", to: "/#" },
  { id: 2, name: "Longforms", to: "/#" },
  { id: 3, name: "Auf Deutsch", to: "#" },
  { id: 3, name: "En Espanol", to: "#" },
];

const NewsNavbar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const muiTheme = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("md"));
  return (
    <Box sx={{ flexGrow: 1, borderBottom: "1px solid black" }}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.white }}>
        <Toolbar sx={{ width: "100%" }}>
          <Box sx={styles.linkDiv}>
            {/* <div style={styles.innerPadding}> */}{" "}
            {/* New element for padding */}
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.to}
                component={RouterLink}
                sx={{
                  color: theme.palette.black,
                  textDecoration: "none",
                  marginRight: "16px",
                  "&:hover": {
                    color: theme.palette.red,
                    borderBottom: `2px solid ${theme.palette.red}`,
                  },
                  borderBottom:
                    activeLink === "search"
                      ? `2px solid ${theme.palette.red}`
                      : "none",
                }}
              >
                <Typography
                  variant="body2"
                  component="div"
                  sx={{ flexGrow: 1, fontWeight: 500 }}
                >
                  {link.name}
                </Typography>
              </Link>
            ))}
            {/* </div> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NewsNavbar;
