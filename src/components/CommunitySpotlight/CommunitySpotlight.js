import React from "react";
import { Box, Typography, Paper, Grid, Card, CardContent } from "@mui/material";
import helmetInGrass from "../../assets/img/helmetInGrass.webp";
import tMobile5g from "../../assets/img/tMobile5g.png";
import theme from "../../theme";

const cardInfo = [
  {
    type: "VIDEO",
    headline:
      "Update on Jackson County Special Election | Vote YES on 1, April 2",
    date: "Mar 27, 2024",
    copy: "Chiefs President Mark Donovan provides an update on the upcoming special election in Jackson County, Missouri on April 2nd, details what a yes vote would mean for Jackson County and Arrowhead Stadium, and shows what a reimagined Arrowhead Stadium could look like. Vote YES on 1 April 2nd: https://www.yeson1jacksoncounty.com/",
    imgUrl:
      "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/chiefs/kxoh7hv6acnqx1gkcmrd.jpg",
  },
  {
    type: "NEWS",
    headline:
      "Chiefs Host Girls Flag Football Coaches for Clinic at GEHA Field at Arrowhead Stadium ahead of Spring Pilot Program Launch",
    date: "Mar 26, 2024",
    copy: "Club to host NFL Flag Super Regional and Girls Flag Luncheon and panel in April",
    imgUrl:
      "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/chiefs/s6walpvq6wkqofszghzx.jpg",
  },
  {
    type: "NEWS",
    headline:
      "Chiefs Unveil Vision and Concepts for a Reimagined Arrowhead Stadium",
    date: "Feb 28, 2024",
    copy: "Chiefs Senior Team Reporter Matt McMullen takes a look at some of the defensive tackle prospects in this years 2024 NFL Draft.",
    imgUrl:
      "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/chiefs/caojicquyzq9uf8auwgs.jpg",
  },
];

const CommunitySpotlight = () => {
  return (
    <section style={{ width: "95%", margin: "16px auto" }}>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid black",
          margin: "0 auto",
          display: "flex",
          marginBottom: "8px",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            borderBottom: "3px solid black",
            width: "248px",
          }}
        >
          Community Spotlight
        </Typography>
      </Box>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      >
        <Grid item xs={12} md={8}>
          <Paper
            variant="elevation"
            elevation={3}
            sx={{
              width: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: 2,
            }}
          >
            <img
              src={helmetInGrass}
              alt="A message from Kansas City Chiefs Chairman and CEO Clark Hunt regarding the April 2nd ballot question and the Chiefs longstanding partnership with Jackson County"
              style={{ width: "100%", height: "auto" }}
            />
            <Typography variant="body1">NEWS</Typography>
            <Typography variant="h6">
              A message from Kansas City Chiefs Chairman and CEO Clark Hunt
              regarding the April 2nd ballot question and the Chiefs
              longstanding partnership with Jackson County
            </Typography>
            <Typography variant="subtitle1">Mar 29, 2024</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            variant="elevation"
            elevation={3}
            sx={{
              width: "100%",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: 2,
            }}
          >
            <img
              src={tMobile5g}
              alt="T Mobile 5g ad"
              style={{ width: "300px", height: "600px" }}
            />
          </Paper>
        </Grid>
        {cardInfo.map((card, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "550px",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    paddingTop: "56.25%",
                    overflow: "hidden",
                    mb: "16px",
                  }}
                >
                  <img
                    src={card.imgUrl}
                    alt="chiefs"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
                <Typography variant="body1">{card.type}</Typography>
                <Typography variant="h6" sx={{ mb: "16px" }}>
                  {card.headline}
                </Typography>
                <Typography variant="body2">{card.copy}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: "16px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.red,
            fontSize: "13px",
            fontWeight: 700,
            "&:hover": { cursor: "pointer" },
          }}
        >
          MORE IN THE COMMUNITY {">"}
        </Typography>
      </Box>
    </section>
  );
};

export default CommunitySpotlight;
