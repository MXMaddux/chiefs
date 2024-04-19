import React from "react";
import { Box } from "@mui/material";
import topBanner from "../../assets/img/myxzmoscemtrdopkbfsn.webp";
import gehaLogo from "../../assets/img/geha.jpeg";
import { Link, Link as RouterLink } from "react-router-dom";

const styles = {
  container: {
    position: "relative", // This makes it a reference point for absolute positioning inside it
    width: "100%", // Ensures the container takes the full width of its parent
  },
  main: {
    width: "100%",
    height: "300px",
    backgroundImage: `url(${topBanner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    "@media (max-width: 1024px)": {
      height: "80px",
    },
  },
  smallImage: {
    position: "absolute",
    bottom: 10,
    right: 10,
    width: "100px",
    "@media (max-width: 1024px)": {
      width: "30px", // Smaller size for smaller screens, if desired
      // height: "30px",
    },
  },
};

const Banner = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.main} />
      <a
        href="https://www.geha.com/get-to-know-us?utm_source=chiefs&utm_medium=display&utm_content=chiefscom_upperright_headerlogo_clickthru&utm_campaign=gehabranded_21101_display_usa_geha23_brandawareness_chiefs_sponsorship_2023"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Box component="img" src={gehaLogo} sx={styles.smallImage} />
      </a>
    </Box>
  );
};

export default Banner;
