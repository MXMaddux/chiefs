import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Stack,
  Button,
  Box,
  List,
  Link,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import BusinessIcon from "@mui/icons-material/Business";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import styles from "./styles";

const latestLinks = [
  {
    id: 0,
    text: "Chiefs Mock Draft Roundup 2 | NFL Draft 2024",
    icon: <PlayCircleOutlineIcon />,
    to: "",
  },
  {
    id: 1,
    text: "2024 Draft Talk: Running Back",
    icon: <PlayCircleOutlineIcon />,
  },
  {
    id: 2,
    text: "Staffing the Outposts | Chatting with Chiefs College Scouts | Defending the Kingdom 4/8",
    icon: <HeadphonesIcon />,
  },
  {
    id: 3,
    text: "Chiefs Re-Sign Running Back Clyde Edwards-Helaire",
    icon: <BusinessIcon />,
  },
  {
    id: 4,
    text: "2024 Draft Talk: Tight End",
    icon: <PlayCircleOutlineIcon />,
  },
  {
    id: 0,
    text: "2024 NFL Draft Positional Spotlight: Defensive Tackle",
    icon: <BusinessIcon />,
  },
  {
    id: 0,
    text: "A Look Back at Every Fifth-Round Draft Pick in Chiefs History4",
    icon: <BusinessIcon />,
  },
];

const TopCard = () => {
  const [isLatestActive, setIsLatestActive] = useState(true);
  const [isPodcastsActive, setIsPodcastsActive] = useState(false);
  const [isCommunityActive, setIsCommunityActive] = useState(false);
  const [showLatest, setShowLatest] = useState(false);

  useEffect(() => {
    setShowLatest(true);
  }, []);

  const handleLatestClick = () => {
    setIsLatestActive(true);
    setIsPodcastsActive(false);
    setIsCommunityActive(false);
    setShowLatest(true);
  };
  const handlePodcastsClick = () => {
    setIsLatestActive(false);
    setIsPodcastsActive(true);
    setIsCommunityActive(false);
  };
  const handleCommunityClick = () => {
    setIsLatestActive(false);
    setIsPodcastsActive(false);
    setIsCommunityActive(true);
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "397.51px",
        height: "64%",
        margin: "0 auto",
        paddingBottom: "16px",
      }}
    >
      <CardContent sx={{ padding: 0, margin: 0 }}>
        <Stack direction="row">
          <CardActions>
            <Button
              sx={isLatestActive ? styles.activeButton : styles.button}
              onClick={handleLatestClick}
              disableElevation
            >
              The Latest
            </Button>
            <Button
              sx={isPodcastsActive ? styles.activeButton : styles.button}
              onClick={handlePodcastsClick}
              disableElevation
            >
              Podcasts
            </Button>
            <Button
              sx={isCommunityActive ? styles.activeButton : styles.button}
              onClick={handleCommunityClick}
              disableElevation
            >
              Community
            </Button>
          </CardActions>
        </Stack>
      </CardContent>
      <CardContent>
        {showLatest && (
          <Box>
            <List>
              {latestLinks.map((link, id) => {
                return (
                  <ul
                    key={id}
                    style={{
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: "14px",
                    }}
                  >
                    <Link to={"#"} sx={styles.routerLink}>
                      <div
                        style={{
                          display: "flex",
                          marginBottom: "16px",
                          width: "100%",
                          gap: 4,
                        }}
                      >
                        {link.icon} {link.text}
                      </div>
                    </Link>
                  </ul>
                );
              })}
            </List>
          </Box>
        )}
      </CardContent>
      <CardActions
        sx={{
          marginTop: "-32px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button sx={styles.moreNewsBtn}>
          More News
          <KeyboardArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default TopCard;
