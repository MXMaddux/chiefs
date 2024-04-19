import { Box, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

const FreeAgencyTracker = () => {
  return (
    <section style={{ margin: "16px 0" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.red,
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ padding: "2rem 0", "&:hover": { cursor: "pointer" } }}>
          <Typography
            variant="h4"
            sx={{
              color: theme.palette.white,
              fontSize: "22px",
              fontWeight: 500,
            }}
          >
            Free Agency Tracker {">"}
          </Typography>
        </Box>
      </Box>
    </section>
  );
};

export default FreeAgencyTracker;
