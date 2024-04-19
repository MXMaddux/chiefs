import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

const links = [
  { id: 1, name: "PRIVACY POLICY", to: "#" },
  { id: 1, name: "CONTACT US", to: "#" },
  { id: 1, name: "ACCESSIBILITY", to: "#" },
  { id: 1, name: "SITE MAP", to: "#" },
  { id: 1, name: "AD CHOICES", to: "#" },
  { id: 1, name: "YOUR PRIVACY CHOICES", to: "#" },
  { id: 1, name: "COOKIE SETTINGS", to: "#" },
];

const Footer = () => {
  return (
    <section>
      <Box
        sx={{
          backgroundColor: theme.palette.red,
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "auto",
          padding: "16px 0 48px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          component={"img"}
          alt="logo"
          src="https://static.www.nfl.com/t_q-best/league/api/clubs/logos/KC"
          sx={{ width: "64px", height: "64px", marginBottom: "24px" }}
        />
        <Box>
          <Typography
            variant="body2"
            sx={{ color: "#fff", fontSize: "80%", fontWeight: 100 }}
          >
            Copyright © 2023 Kansas City Chiefs
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex", // Ensure it's always flex to enable flexDirection
            flexDirection: { xs: "column", lg: "row" }, // starts as column then switches to row at 'lg' breakpoint
            marginTop: "16px",
            width: "100%", // This ensures it takes the full width and might help in correct display
            justifyContent: "center", // Centers the buttons when in column mode
            alignItems: "center", // Keeps items centered, adjust as needed
            "@media (min-width:1024px)": {
              flexDirection: "row", // Ensures row layout starts precisely at 1024px width
            },
          }}
        >
          {links.map(
            (
              link,
              index // Make sure to use 'index' as key when ids are the same
            ) => (
              <Button
                key={index}
                sx={{
                  backgroundColor: theme.palette.red,
                  borderRadius: 0,
                  color: "white",
                  fontWeight: 300,
                  margin: "0 4px",
                  "&:hover": {
                    backgroundColor: theme.palette.red,
                    borderBottom: "1px solid white",
                  },
                }}
              >
                {link.name}
              </Button>
            )
          )}
        </Box>
      </Box>
    </section>
  );
};

export default Footer;
