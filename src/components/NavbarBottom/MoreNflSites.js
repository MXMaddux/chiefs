import { Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

const sites = [
  { name: "NFL Football Operations", link: "#" },
  { name: "NFL Shop", link: "#" },
  { name: "NFL On Location", link: "#" },
  { name: "Pro Football Hall of Fame", link: "#" },
  { name: "Licensing", link: "#" },
  { name: "USA Football", link: "#" },
  { name: "NFL Extra Points", link: "#" },
  { name: "NFL Ticket Exchange", link: "#" },
];

const MoreNflSites = () => {
  return (
    <section
      style={{
        width: "100%",
        display: "flex",
        margin: "0 auto",
        paddingTop: "16px",
        justifyContent: "center",
        alignItems: "start", // This will vertically center the Grid if needed
        // minHeight: "100vh", // Ensures the section takes at least the height of the viewport
        height: "800px",
        backgroundColor: theme.palette.darkestGray,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="center"
        style={{ maxWidth: "384px", height: "32px", paddingTop: "16px" }}
      >
        {sites.map((site, index) => (
          <Grid
            item
            xs={12} // Full width on extra-small to small screens
            sm={6} // Half width starting from small screens
            md={6} // Maintain half width on medium screens
            lg={6} // Maintain half width on large screens
            key={index}
            sx={{
              backgroundColor: "transparent",
              display: "flex",
              flexDirection: "column", // Set flex direction to column
              alignItems: "center", // Center content horizontally in the box
              justifyContent: "start",
              height: "48px", // Set a fixed height for each grid item
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.white,
                fontWeight: 300,
                fontSize: "85%",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              {site.name}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </section>
  );
};

export default MoreNflSites;
