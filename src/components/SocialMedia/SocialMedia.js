import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import fb from "../../assets/fb_icon-icons.com_65434.svg";
import insta from "../../assets/instagram-svgrepo-com.svg";
import snap from "../../assets/snapchat-logo-1.svg";
import yt from "../../assets/youtube.png";
import tiktok from "../../assets/tiktok-circle-outline-perple-01.png";
import x from "../../assets/twitter-x-logo-black-rounded-outline-20850.png";

const links = [
  {
    platform: "FACEBOOK",
    name: "Kansas City Chiefs",
    icon: fb,
  },
  {
    platform: "INSTAGRAM",
    name: "Chiefs",
    icon: insta,
  },
  {
    platform: "SNAPCHAT",
    name: "officialchiefs",
    icon: snap,
  },
  {
    platform: "YOUTUBE",
    name: "Chiefs on YouTube",
    icon: yt,
  },
  {
    platform: "TIKTOK",
    name: "Chiefs",
    icon: tiktok,
  },
  {
    platform: "X",
    name: "Chiefs",
    icon: x,
  },
];

const SocialMedia = () => {
  return (
    <section style={{ margin: "16px auto", width: "95%" }}>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid black",
          margin: "32px auto",
          display: "flex",
        }}
      >
        <span
          style={{
            borderBottom: "2px solid black",
            paddingBottom: "3px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
            }}
          >
            Follow Us On Social
          </Typography>
        </span>
      </Box>
      <Grid container spacing={2}>
        {" "}
        {/* Create a container Grid */}
        {links.map((link, index) => (
          <Grid item xs={12} sm={6} lg={4} key={index}>
            {" "}
            {/* Control the number of columns */}
            <Paper
              elevation={0}
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                textAlign: "left",
                padding: 2,
                width: "100%", // Ensures the Paper uses the entire space of the Grid item
                "&:hover": { cursor: "pointer" },
              }}
            >
              <img
                src={link.icon}
                alt={`${link.platform} icon`}
                style={{ width: "32px", height: "32px", marginRight: "12px" }}
              />
              <Box
                sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {link.platform}
                </Typography>
                <Typography variant="body2">{link.name}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "24px auto",
          width: "50%",
          "&:hover": { cursor: "pointer" },
        }}
      >
        <img
          src="https://tpc.googlesyndication.com/simgad/1751431054013995055"
          alt="Ford ad"
        />
      </Box>
    </section>
  );
};

export default SocialMedia;
