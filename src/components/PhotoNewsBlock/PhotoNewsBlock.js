import React from "react";
import { Box, Paper, MobileStepper, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css"; // Import Swiper CSS
import "swiper/css/navigation";
import "swiper/css/pagination";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import DraftHistory from "../../assets/img/DraftHistory.webp";
import CarsonWentz from "../../assets/img/carsonWentz.webp";
import theme from "../../theme";

const styles = {
  slide: {
    height: "auto",
    display: "block",
    maxWidth: "100%",
    overflow: "hidden",
  },
  paper: {
    width: "100%",
    maxWidth: "51.5rem",
    height: "auto",
    margin: "0 auto",
  },
  section: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    maxWidth: "1279px",
    margin: "0 auto",
  },
};

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

const PhotoNewsBlock = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 2;

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
      <Paper variant="elevation" elevation={3} sx={styles.paper}>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={false} // Set navigation to false to remove overlay arrows
          autoplay={{ delay: 2500 }}
          onSlideChange={(swiper) => setActiveStep(swiper.activeIndex)}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} alt="news" style={styles.slide} />
              <Box sx={{ margin: "0 32px" }}>
                <h1>{item.h1}</h1>
                <h6>{item.h6}</h6>
                <p>{item.body1}</p>
              </Box>
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
      </Paper>
    </Box>
  );
};

export default PhotoNewsBlock;
