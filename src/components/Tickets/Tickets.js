import { Box, Button, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme";
import chrisJones from "../../assets/img/ChrisJones.webp";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: theme.palette.white,
    zIndex: 2,
  },
  overlayBlack: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 1,
  },
  btn: {
    backgroundColor: theme.palette.red,
    color: theme.palette.white,
    margin: theme.spacing(1),
    width: "50%", // Full width buttons on small screens
    mt: "32px",
  },
};

const Tickets = () => {
  return (
    <section>
      <Box>
        <Card style={styles.card}>
          <CardMedia image={chrisJones} style={styles.media}>
            <div style={styles.overlayBlack} />
          </CardMedia>
          <div style={styles.overlay}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                fontWeight: 700,
                flexWrap: "nowrap",
                mb: "24px",
              }}
            >
              YOU WON'T WANT TO MISS THIS
            </Typography>
            <Typography variant="body2">Reserve your tickets today!</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "center",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Button sx={styles.btn}>
                <Typography variant="body1">SINGLE GAME TICKETS</Typography>
              </Button>
              <Button sx={styles.btn}>
                <Typography variant="body1">SEASON TICKETS</Typography>
              </Button>
            </Box>
          </div>
        </Card>
      </Box>
    </section>
  );
};

export default Tickets;
