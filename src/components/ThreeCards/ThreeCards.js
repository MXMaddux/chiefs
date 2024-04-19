import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    width: "100%", // Ensures the card fills the grid column
    maxWidth: "400px",
    height: "484px", // You can adjust this as needed
    backgroundColor: theme.palette.white,
    margin: "auto",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px", // Adds some padding inside each card
  },
  btn: {
    backgroundColor: theme.palette.red,
    color: theme.palette.white,
    marginBottom: { xs: 1, sm: 0 },
    "&:hover": {
      backgroundColor: theme.palette.red,
      cursor: "pointer",
    },
  },
  img: {
    width: "100%", // Ensures the image width is not more than the card
    maxHeight: "200px", // Limits the image height
    objectFit: "contain", // Keeps the aspect ratio and makes the image fit within the dimensions
  },
  headline: {
    mt: 2,
    mb: 2,
    fontSize: "18px",
    fontWeight: "bold",
  },
  copy: {
    fontSize: "14px",
    marginBottom: "16px",
    fontWeight: 400,
  },
};

const ThreeCards = () => {
  return (
    <section style={{ overflowY: "hidden", paddingBottom: "32px" }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={styles.card}>
            <Box
              component="img"
              src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_6_desktop/f_auto/chiefs/jmop5zpnmf5wit8bdxxy.jpg"
              sx={styles.img}
            />
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography variant="h4" sx={styles.headline}>
                CHIEFS CHEERLEADERS
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  gap: 1,
                }}
              >
                <Button sx={styles.btn}>MEET THE SQUAD</Button>
                <Button sx={styles.btn}>APPEARANCES</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={styles.card}>
            <Box
              component="img"
              src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_6_desktop/f_png/chiefs/dr0cdsbaeqqkd5gcnful.png"
              sx={styles.img}
            />
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography variant="h4" sx={styles.headline}>
                CONNECTING THE KINGDOM
              </Typography>
              <Typography variant="body1" sx={styles.copy}>
                Chiefs Kingdom has no borders, and no Chiefs fan should have to
                celebrate gameday alone. Chiefs Kingdom Worldwide exists to
                connect the Kingdom, no matter where you are. Help keep the
                Kingdom close by sharing your information and location below to
                get connected!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                  mb: "16px",
                }}
              >
                <Button sx={styles.btn}>LEARN MORE</Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={styles.card}>
            <Box
              component="img"
              src="https://static.clubs.nfl.com/image/private/t_editorial_landscape_6_desktop/f_auto/chiefs/uxzzvilztdnoezllehns.jpg"
              sx={styles.img}
            />
            <Box sx={{ textAlign: "center", width: "100%" }}>
              <Typography variant="h4" sx={styles.headline}>
                CHIEFS PRO SHOP
              </Typography>
              <Typography variant="body1" sx={styles.copy}>
                Get all your Chiefs gear from the official Chiefs Pro Shop
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  justifyContent: "center",
                }}
              >
                <Button
                  href="https://shop.chiefs.com/?_s=bm-chiefs-HPmodule-022620"
                  target="_blank"
                  sx={styles.btn}
                >
                  SHOP NOW
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </section>
  );
};

export default ThreeCards;
