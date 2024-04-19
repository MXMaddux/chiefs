import React from "react";
import {
  AppBar,
  Container,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import {
  newsLinks,
  videosLinks,
  photosLinks,
  listenLinks,
  chiefsLinks,
  fansLinks,
  ticketsLinks,
  intlLinks,
} from "./linksList";
import theme from "../../theme";

const ClubLinks = () => {
  const linkGroups = [
    { title: "NEWS", links: newsLinks },
    { title: "VIDEOS", links: videosLinks },
    { title: "PHOTOS", links: photosLinks },
    { title: "LISTEN", links: listenLinks },
    { title: "CHIEFS", links: chiefsLinks },
    { title: "FANS", links: fansLinks },
    { title: "TICKETS", links: ticketsLinks },
    { title: "INTERNATIONAL", links: intlLinks },
  ];

  const commonStyle = {
    width: "100%", // Match to DownloadApps
    margin: "0 auto", // Centering
    backgroundColor: theme.palette.darkestGray, // Common background color
  };

  return (
    <section style={commonStyle} position="relative">
      <AppBar
        position="static"
        sx={{ backgroundColor: theme.palette.darkestGray }}
      >
        <Container maxWidth="xl" sx={{ maxWidth: "calc(100% - 48px)" }}>
          <Toolbar disableGutters>
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: theme.palette.darkestGray,
                height: "90%",
                marginTop: "16px",
              }}
              justifyContent="space-between" // Centers the grid items horizontally
            >
              {linkGroups.map((group, index) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={1}
                  lg={1}
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // This will center the items inside each grid item
                    backgroundColor: theme.palette.darkestGray,
                  }}
                >
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontSize: "85%" }}
                  >
                    {group.title}
                  </Typography>
                  <List dense>
                    {group.links.map((link) => (
                      <ListItem key={link.id}>
                        <ListItemText>
                          <Link
                            href={link.link}
                            color="inherit"
                            underline="hover"
                            sx={{
                              fontWeight: 300,
                              fontSize: "85%",
                              color: theme.palette.gray,
                            }}
                          >
                            {link.text}
                          </Link>
                        </ListItemText>
                      </ListItem>
                    ))}
                  </List>
                </Grid>
              ))}
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default ClubLinks;
