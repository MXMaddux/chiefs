import React, { useState } from "react";
import {
  Box,
  Paper,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import images from "./images";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Franchise = () => {
  const [activeStep, setActiveStep] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Handle Swiper change event
  const handleSwiperChange = (swiper) => {
    setActiveStep(swiper.activeIndex);
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
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            borderBottom: "2px solid black",
            paddingBottom: "3px",
          }}
        >
          The Franchise By GEHA | Season 4
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
          spaceBetween={10}
          slidesPerView={isSmallScreen ? 1 : 2}
          navigation
          pagination={{ clickable: true }}
          onSwiper={(swiper) => setActiveStep(swiper.activeIndex)}
          onSlideChange={handleSwiperChange}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  textAlign: "center",
                  padding: 2,
                  img: {
                    width: "100%",
                    height: "auto",
                    maxHeight: isSmallScreen ? "300px" : "500px",
                  },
                }}
              >
                <img
                  src={img.img}
                  alt={`Slide ${index}`}
                  style={{ objectFit: "contain" }}
                />
                <Typography variant="body1">{img.p}</Typography>
                <Typography variant="h6">{img.h2}</Typography>
                <Typography variant="subtitle1">{img.h6}</Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.red,
            fontSize: "13px",
            fontWeight: 500,
            "&:hover": { cursor: "pointer" },
            margin: "8px auto",
            textAlign: "center",
          }}
        >
          Watch On YouTube {">"}
        </Typography>
      </Paper>
    </div>
  );
};

export default Franchise;
