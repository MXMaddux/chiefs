import React, { useState } from "react";
import { Box, Paper, Button, MobileStepper, Typography } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import theme from "../../theme";
import images from "./images";

const FeaturedPhotos = () => {
  const [activeStep, setActiveStep] = useState(0);
  const pairedImages = []; // Pair up images for dual display

  // Pair images for dual slide display
  for (let i = 0; i < images.length; i += 2) {
    pairedImages.push(images.slice(i, i + 2));
  }

  const maxSteps = pairedImages.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) =>
      Math.min(prevActiveStep + 1, maxSteps - 1)
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box
        sx={{ width: "95%", borderBottom: "1px solid black", margin: "0 auto" }}
      >
        <Box sx={{ width: "184px", borderBottom: "3px solid black" }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,

              marginBottom: "8px",
            }}
          >
            Featured Photos
          </Typography>
        </Box>
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
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {pairedImages.map((pair, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              {pair.map((img, imgIndex) => (
                <Box
                  key={imgIndex}
                  sx={{ width: "50%", textAlign: "center", padding: 2 }}
                >
                  <img
                    src={img.img}
                    alt={`random pic selection`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography variant="body1">{img.p}</Typography>
                  <Typography variant="h6">{img.h2}</Typography>
                  <Typography variant="subtitle1">{img.h6}</Typography>
                  <Typography variant="body2">{img.body1}</Typography>
                </Box>
              ))}
            </div>
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{
            width: "100%",
            "& .MuiMobileStepper-dot": {
              backgroundColor: theme.palette.gray, // Hide default dots
              width: "20px",
              height: "10px",
              borderRadius: 0,
              margin: "0 2px",
              "&.MuiMobileStepper-dotActive": {
                backgroundColor: "red", // Color for the active rectangle
                transform: "scale(1)", // Optional: Increase size for active rectangle
              },
            },
            "& .MuiMobileStepper-dots": {
              transform: "scaleX(2)", // Stretch the dot container to form rectangles
            },
          }}
          nextButton={
            <Button
              size="large"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction !== "rtl" && (
                <KeyboardArrowRight
                  sx={{ fontSize: "40px", color: theme.palette.black }}
                />
              )}
            </Button>
          }
          backButton={
            <Button
              size="large"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction !== "rtl" && (
                <KeyboardArrowLeft sx={{ fontSize: "40px" }} />
              )}
            </Button>
          }
        />
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.red,
            fontSize: "13px",
            fontWeight: 500,
            "&:hover": { cursor: "pointer" },
          }}
        >
          MORE PHOTOS {">"}
        </Typography>
      </Paper>
    </>
  );
};

export default FeaturedPhotos;
