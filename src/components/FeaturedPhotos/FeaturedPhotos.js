import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/autoplay"; // Autoplay styles

import { Box, Paper, Button, Typography, MobileStepper } from "@mui/material";
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
        <Typography variant="h5" sx={{ fontWeight: 700, marginBottom: "8px" }}>
          Featured Photos
        </Typography>
      </Box>
      <Paper
        variant="elevation"
        elevation={3}
        sx={{
          width: "100%",
          overflow: "hidden",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 2500 }}
          onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        >
          {pairedImages.map((pair, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {pair.map((img, imgIndex) => (
                <Box
                  key={imgIndex}
                  sx={{ width: "50%", textAlign: "left", padding: 2 }}
                >
                  <img
                    src={img.img}
                    alt={`featured pic ${imgIndex}`}
                    style={{ width: "100%", height: "auto" }}
                  />
                  <Typography
                    variant="body1"
                    sx={{ fontWeight: 700, color: theme.palette.darkGray }}
                  >
                    {img.p}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 900 }}>
                    {img.h2}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 500, color: theme.palette.darkGray }}
                  >
                    {img.h6}
                  </Typography>
                  <Typography variant="body2">{img.body1}</Typography>
                </Box>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
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
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          MORE PHOTOS {">"}
        </Typography>
      </Paper>
    </>
  );
};

export default FeaturedPhotos;
