import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import branson from "../../assets/img/branson.jpeg";
import budLight from "../../assets/img/budLight.png";
import cashBack from "../../assets/img/cashBack.jpeg";
import coke from "../../assets/img/coke.jpeg";
import communityAmerica from "../../assets/img/CommunityAmerica.png";
import gehaAd from "../../assets/img/gehaAd.png";
import heroSleepNumber from "../../assets/img/heroSleepNumberBed.jpeg";
import kuCancer from "../../assets/img/KUCancer.jpeg";
import ticketMaster from "../../assets/img/ticketMaster.jpeg";

const pics = [
  { name: branson, to: "#" },
  { name: budLight, to: "#" },
  { name: cashBack, to: "#" },
  { name: coke, to: "#" },
  { name: communityAmerica, to: "#" },
  { name: heroSleepNumber, to: "#" },
  { name: kuCancer, to: "#" },
  { name: ticketMaster, to: "#" },
  { name: branson, to: "#" },
];

const getRandomPicSrc = () => {
  const randomIndex = Math.floor(Math.random() * pics.length); // Corrected to use `pics.length` directly
  return pics[randomIndex].name; // Return the src from the pics array
};

const AddBanner = () => {
  return (
    <Box
      sx={{ margin: "32px auto", display: "flex", justifyContent: "center" }}
    >
      <Link to={"#"}>
        <Box
          component="img"
          src={getRandomPicSrc()}
          alt="Advertisement"
          sx={{ width: "100%" }}
        />
      </Link>
    </Box>
  );
};

export default AddBanner;
