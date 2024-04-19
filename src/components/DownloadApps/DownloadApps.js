import React from "react";
import theme from "../../theme";
import { Box } from "@mui/material";

import appStore from "../../assets/appStore.svg";
import googlePlay from "../../assets/googlePlay.png";

const DownloadApps = () => {
  return (
    <Box
      sx={{
        height: "99.82px",
        width: "100%",
        margin: "0 auto",
        backgroundColor: theme.palette.darkestGray,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderTop: `1px solid ${theme.palette.white}`,
      }}
    >
      <Box>
        <span
          style={{
            color: theme.palette.white,
            fontWeight: 300,
            fontSize: "85%",
          }}
        >
          DOWNLOAD APPS
        </span>
      </Box>
      <Box sx={{ display: "flex", "&:hover": { cursor: "pointer" } }}>
        <img
          src={appStore}
          alt="App Store"
          style={{ width: "100px", marginRight: "16px" }}
        />
        <img
          src={googlePlay}
          alt="Google Play Store"
          style={{ width: "115px" }}
        />
      </Box>
    </Box>
  );
};

export default DownloadApps;
