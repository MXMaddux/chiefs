import React from "react";
import { Paper, Box } from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import DraftHistory from "../../assets/img/DraftHistory.webp";
import CarsonWentz from "../../assets/img/carsonWentz.webp";
import theme from "../../theme";

const images = [
  {
    img: DraftHistory,
    h1: "A Look Back At Every Fifth-Round Draft Pick In Chiefs History",
    h6: "2024-04-06",
    body1: "The 2024 NFL Draft is inching closer by the day",
  },
  {
    img: CarsonWentz,
    h1: "Carson Wentz Speaks To The Media | Press Conference 4/4",
    h6: "2024-04-04",
    body1: "Kansas City Chiefs quarterback speaks to the media",
  },
];

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    // Removed fixed width and height, using backgroundSize contain will maintain aspect ratio
    backgroundImage: `url(${images[0].img})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  slide2: {
    // Same adjustments as slide1
    backgroundImage: `url(${images[1].img})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  paper: {
    // Adjust width to be responsive
    width: "100%", // Use 100% width for smaller screens
    maxWidth: "51.5rem", // Maximum width to control size on larger screens
    height: "auto", // Adjust height to be automatic
    margin: "0 auto",
  },
  section: {
    display: "flex",
    alignItems: "center",
    width: "100%", // Ensure section takes up 100% width
    maxWidth: "1279px", // Control maximum width
    margin: "0 auto",
  },
};

const PhotoNewsBlock = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 2;

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews); // Total number of slides

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <Box sx={styles.section}>
      <Paper variant={"elevation"} elevation={3} sx={styles.paper}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={index}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "auto",
                    display: "block",
                    width: "51.5rem",
                    overflow: "hidden",

                    background: theme.palette.white,
                  }}
                  src={step.img}
                  alt={"photo"}
                />
              ) : null}
              <Box
                sx={{
                  width: "37.5rem",
                  height: "18.75rem",
                  marginLeft: "32px",
                }}
              >
                <h1 style={{ margin: "16px 0 -16px 48px" }}>{step.h1}</h1>
                <br />
                <h6 style={{ margin: "16px 0 -32px 48px", fontSize: "18px" }}>
                  {step.h6}
                </h6>
                <br />
                <p style={{ margin: "16px 0 -32px 48px" }}>{step.body1}</p>
              </Box>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          sx={{ width: "51.5rem", marginTop: "-72px" }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              sx={{ color: theme.palette.black }}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft sx={{ fontSize: "32px" }} />
              ) : (
                <KeyboardArrowRight sx={{ fontSize: "32px" }} />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              sx={{ color: theme.palette.black }}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight sx={{ fontSize: "32px" }} />
              ) : (
                <KeyboardArrowLeft sx={{ fontSize: "32px" }} />
              )}
            </Button>
          }
        />
      </Paper>
    </Box>
  );
};

export default PhotoNewsBlock;
