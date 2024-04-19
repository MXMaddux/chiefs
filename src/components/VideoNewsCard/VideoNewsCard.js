import { AspectRatio } from "@mui/icons-material";
import { Box, Card, CardContent } from "@mui/material";
import React from "react";

const cardInfo = [
  {
    type: "VIDEO",
    headline: "Carson Wentz Speaks to the Media | Press Conference 4/4",
    date: "Apr 4, 2024",
    copy: "Kansas City Chiefs quarterback Carson Wentz speaks to the media.",
    imgUrl:
      "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/chiefs/caushgm6vihpxtkbgrzd.jpg",
  },
  {
    type: "NEWS",
    headline: "Five Things to Know About New Chiefs QB Carson Wentz",
    date: "Apr 4, 2024",
    copy: "The Chiefs signed Wentz on Thursday",
    imgUrl:
      "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/chiefs/vtmctclr7rahvoyu4vdj.jpg",
  },
  {
    type: "VIDEO",
    headline: "2024 Draft Talk: Defensive Tackle",
    date: "Apr 4, 2024",
    copy: "Chiefs Senior Team Reporter Matt McMullen takes a look at some of the defensive tackle prospects in this years 2024 NFL Draft.",
    imgUrl:
      "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/chiefs/dq9dks2le8pk2ivkxklc.webp",
  },
  {
    type: "NEWS",
    headline:
      "Who Will the Chiefs Pick in Round 1? | 2024 Mock Draft Roundup 3.0",
    date: "Apr 4, 2024",
    copy: "Here's the latest look at who the experts think the Chiefs will draft on April 25",
    imgUrl:
      "https://static.clubs.nfl.com/image/upload/t_editorial_landscape_3_4_desktop/f_auto/chiefs/r9eqkjgc4bboyc0quvsw.jpg",
  },
];

const VideoNewsCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap", // Allow items to wrap to the next row
        gap: 2,
        justifyContent: "center",
        margin: "32px auto",
      }}
    >
      {cardInfo.map((card, index) => (
        <Card
          key={index}
          sx={{
            width: {
              xs: "80%",
              md: "calc(50% - 16px)", // 2 across on medium screens, subtracting the gap
              lg: "calc(25% - 16px)", // 4 across on large screens, subtracting the gap
            },
            mb: 2, // Adds a bottom margin for spacing between rows
            display: "flex",
            flexDirection: "column",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <CardContent>
            <Box
              sx={{
                pt: "56.25%", // This creates a container with a 16:9 aspect ratio
                position: "relative",
                width: "100%", // Ensure the image container is full width
                height: 0, // Initial height, aspect ratio will define actual height
                overflow: "hidden",
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
                  objectFit: "cover", // Cover ensures the aspect ratio is maintained without stretching
                }}
              />
            </Box>
            <Box>
              <h3>{card.type}</h3>
            </Box>
            <Box>{card.headline}</Box>
            <Box>{card.copy}</Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default VideoNewsCard;
