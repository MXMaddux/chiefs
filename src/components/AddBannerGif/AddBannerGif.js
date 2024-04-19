import { Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import jrieger from "../../assets/img/jrieger.gif";

const AddBannerGif = () => {
  return (
    <Box
      sx={{ margin: "32px auto", display: "flex", justifyContent: "center" }}
    >
      <Link to={"#"}>
        <Box
          component="img"
          src={jrieger}
          alt="Advertisement"
          sx={{ width: "100%" }}
        />
      </Link>
    </Box>
  );
};

export default AddBannerGif;
