import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import theme from "../../theme";

const pages = ["CLUB LINKS", "NFL CLUBS", "MORE NFL SITES"];

const NavbarBottom = ({ activeLink, setActiveLink }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section style={{ width: "100%", margin: "0 auto" }}>
      <AppBar
        position="static"
        sx={{
          background: "#000000",
          height: isSmallScreen ? "140px" : "40px", // Adjust height based on screen size
          padding: "8px 0",
          justifyContent: "center",
        }}
      >
        <Container maxWidth={false} sx={{ width: "100%", padding: 0 }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: "auto", // Remove specific minHeight settings
              height: "auto",
              width: "100%",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                flexDirection: isSmallScreen ? "column" : "row", // Ensure flexDirection changes with screen size
                width: "100%",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => setActiveLink(page)}
                  sx={{
                    my: 1,
                    color: "white",
                    display: "flex",
                    alignItems: "center", // Align items to center might work better
                    justifyContent: "space-between",
                    padding: "6px 12px",
                    width: isSmallScreen ? "100%" : "auto", // Ensure button width is 100% on small screens
                    borderBottom:
                      activeLink === page ? "2px solid white" : "none",
                    borderRadius: 0,
                  }}
                >
                  <Typography>{page}</Typography>
                  {isSmallScreen && <ExpandMoreIcon />}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default NavbarBottom;
