import React from "react";
import heatedApparelGif from "../../assets/img/heatedApparel.gif";
import { Box } from "@mui/material";

const HeatedApparel = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box component={"img"} src={heatedApparelGif} />
    </Box>
  );
};

export default HeatedApparel;
