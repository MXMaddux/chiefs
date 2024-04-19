import { Box, Grid, styled, Paper, Typography } from "@mui/material";
import React from "react";

const data = [
  {
    imgUrl:
      "https://static.clubs.nfl.com/image/private/t_thumb_squared/f_png/v1617304831/chiefs/oc3bs4dqnsrpknjrlpgr.png",
    title: "Download the Chiefs Mobile App",
    text: "Stay up to date on news, access your tickets & parking pass, sign-up for Chiefs Kingdom Rewards & much more",
  },
  {
    imgUrl:
      "https://static.clubs.nfl.com/image/private/t_thumb_squared/f_png/v1617305785/chiefs/xfkhvwtzblbj5kgyqn0b.png",
    title: "Sign Up for Chiefs Kingdom Rewards",
    text: "Where Chiefs fans go to play and win!",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#212121",
  boxShadow: "none",
  border: "none",
}));

const MobileAppRewards = () => {
  return (
    <section style={{ margin: "32px 0" }}>
      <Box
        sx={{
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          {data.map((item, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  height: "132px",
                  width: {
                    xs: "100%",
                  },
                  background: "#fff",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Item>
                  <Box component={"img"} src={item.imgUrl} />
                </Item>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <Item>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                  </Item>
                  <Item sx={{ height: "64%" }}>
                    <Typography variant="body1">{item.text}</Typography>
                  </Item>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default MobileAppRewards;
