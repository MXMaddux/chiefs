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
  afcSouthTeams,
  afcEastTeams,
  afcNorthTeams,
  afcWestTeams,
  nfcEastTeams,
  nfcNorthTeams,
  nfcSouthTeams,
  nfcWestTeams,
} from "./linksList";
import theme from "../../theme";

const NflClubLinks = () => {
  const linkGroups = [
    { title: "AFC NORTH", links: afcNorthTeams },
    { title: "AFC EAST", links: afcEastTeams },
    { title: "AFC SOUTH", links: afcSouthTeams },
    { title: "AFC WEST", links: afcWestTeams },
    { title: "NFC NORTH", links: nfcNorthTeams },
    { title: "NFC EAST", links: nfcEastTeams },
    { title: "NFC SOUTH", links: nfcSouthTeams },
    { title: "NFC WEST", links: nfcWestTeams },
  ];

  const commonStyle = {
    width: "100%", // Match to DownloadApps
    margin: "0 auto", // Centering
    backgroundColor: theme.palette.darkestGray, // Common background color
  };

  return (
    <section style={commonStyle}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: theme.palette.darkestGray,
          maxHeight: "90%", // Ensuring AppBar doesn't exceed the viewport height
        }}
      >
        <Container maxWidth="xl" sx={{ width: "100%" }}>
          <Toolbar disableGutters>
            <Grid
              container
              spacing={2}
              sx={{
                backgroundColor: theme.palette.darkestGray,
                height: "90%",
                marginTop: "16px",
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{
                  backgroundColor: theme.palette.darkestGray,
                  height: "auto",
                }}
              >
                {linkGroups.map((group, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    lg={2}
                    key={index}
                    sx={{
                      backgroundColor: theme.palette.darkestGray,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "auto",
                    }}
                  >
                    <Typography variant="h6" gutterBottom>
                      {group.title}
                    </Typography>
                    <List dense>
                      {group.links.map((link) => (
                        <ListItem key={link.id}>
                          <ListItemText>
                            <Link
                              href={link.to}
                              color="inherit"
                              underline="hover"
                            >
                              <img
                                src={link.icon}
                                alt="NFL teams"
                                style={{ height: "44px", width: "44px" }}
                              />
                            </Link>
                          </ListItemText>
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </section>
  );
};

export default NflClubLinks;
