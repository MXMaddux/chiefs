import React, { useState } from "react";
import {
  Box,
  Paper,
  Button,
  MobileStepper,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import images from "./images";

const Franchise = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Determine number of images per group based on screen size
  const imagesPerGroup = isLargeScreen ? 3 : isMediumScreen ? 2 : 1;
  const groupedImages = [];

  // Group images based on the determined size
  for (let i = 0; i < images.length; i += imagesPerGroup) {
    groupedImages.push(images.slice(i, i + imagesPerGroup));
  }

  const maxSteps = groupedImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  return (
    <div style={{ width: "95%", margin: "16px auto" }}>
      <Box
        sx={{
          width: "100%",
          borderBottom: "1px solid black",
          margin: "0 auto",
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
            The Franchise By GEHA | Season 4
          </Typography>
        </span>
      </Box>
      <Paper
        variant="elevation"
        elevation={3}
        sx={{
          width: "100%",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleNext}
        >
          {groupedImages.map((group, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
                width: "90%",
              }}
            >
              {group.map((img, imgIndex) => (
                <Box
                  key={imgIndex}
                  sx={{
                    width: `${100 / imagesPerGroup}%`, // Use 100% of the container divided by the number of images per group
                    maxWidth: "100%", // Make sure that the box never exceeds the bounds of its container
                    textAlign: "center",
                    padding: 2,
                    img: {
                      width: "100%", // Image should always try to fill its container's width
                      height: "auto", // Height should adjust automatically
                      maxHeight: isSmallScreen ? "300px" : "500px", // Use sensible max heights for different screens
                    },
                  }}
                >
                  <img
                    src={img.img}
                    alt={`Slide ${imgIndex}`}
                    style={{ objectFit: "contain" }}
                  />
                  <Typography variant="body1">{img.p}</Typography>
                  <Typography variant="h6">{img.h2}</Typography>
                  <Typography variant="subtitle1">{img.h6}</Typography>
                </Box>
              ))}
            </div>
          ))}
        </SwipeableViews>
        {!isSmallScreen && (
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              width: "100%",
              "& .MuiMobileStepper-dot": {
                backgroundColor: theme.palette.gray,
                width: "20px",
                height: "10px",
                borderRadius: 0,
                margin: "0 2px",
                "&.MuiMobileStepper-dotActive": {
                  backgroundColor: "red",
                },
              },
            }}
            nextButton={
              <Button
                size="large"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button
                size="large"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                <KeyboardArrowLeft />
              </Button>
            }
          />
        )}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.red,
            fontSize: "13px",
            fontWeight: 500,
            "&:hover": { cursor: "pointer" },
          }}
        >
          Watch On YouTube {">"}
        </Typography>
      </Paper>
    </div>
  );
};

export default Franchise;
