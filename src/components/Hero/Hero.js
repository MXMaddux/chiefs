import React from "react";
import { Box } from "@mui/material";
import PhotoNewsBlock from "../PhotoNewsBlock/PhotoNewsBlock";
import TopCard from "../TopCard/TopCard";
import gehaSquareAd from "../../assets/img/gehaSquareAd.png";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        // minWidth removed to allow responsive width below 1280px
        height: "100%",
        padding: "2rem",
        flexGrow: 1,
        overflowY: "hidden",
        // Media query for screens smaller than 1244px
        "@media (max-width: 1244px)": {
          padding: "1rem", // Optional: Adjust padding for smaller screens
        },
      }}
    >
      {/* Wrap PhotoNewsBlock and TopCard together in a single Box */}
      <Box
        sx={{
          display: "flex",
          // Default to column layout, adjust for larger screens with media query
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          width: "100%", // Ensure full width
          "@media (min-width: 1245px)": {
            flexDirection: "row", // Horizontal layout for screens wider than 1244px
            width: "fit-content", // Shrink to fit content for larger screens
          },
          margin: "0 auto",
        }}
      >
        <PhotoNewsBlock sx={{ width: "100%" }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Ensure the inner box also takes full width on smaller screens
          }}
        >
          <TopCard sx={{ width: "100%" }} />
          <Box
            component={"img"}
            src={gehaSquareAd}
            sx={{
              width: "300px", // Consider adjusting this width for smaller screens as needed
              height: "250px",
              marginTop: "16px",
              marginX: "auto", // Center the image horizontally
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
