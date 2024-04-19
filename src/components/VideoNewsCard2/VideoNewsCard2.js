import { AspectRatio } from "@mui/icons-material";
import { Box, Card, CardContent } from "@mui/material";
import React from "react";
import pic1 from "../../assets/img/pic1.png";
import pic2 from "../../assets/img/pic2.png";
import pic3 from "../../assets/img/pic3.png";
import pic4 from "../../assets/img/pic4.png";
import pic5 from "../../assets/img/pic5.png";
import pic6 from "../../assets/img/pic6.png";
import pic7 from "../../assets/img/pic7.png";
import pic8 from "../../assets/img/pic8.png";

const pics = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];

const VideoNewsCard2 = () => {
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
      {pics.map((pic, index) => (
        <Card
          key={index}
          sx={{
            width: {
              xs: "100%",
              sm: "calc(40% - 16px)", // 2 across on small to medium screens
              md: "calc(40% - 16px)", // Continue 2 across until medium breakpoint
              lg: "calc(25% - 16px)", // 4 across on large screens
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
                pt: "150%", // This creates a container with a 16:9 aspect ratio
                position: "relative",
                width: "100%", // Ensure the image container is full width
                height: 0, // Initial height, aspect ratio will define actual height
                overflow: "hidden",
              }}
            >
              <img
                src={pic}
                alt="pic display"
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
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default VideoNewsCard2;
