import { createTheme } from "@mui/material";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";

const breakpoints = createBreakpoints({});

const theme = createTheme({
  palette: {
    red: "#fa0017",
    white: "#fff",
    gold: "#c1a953",
    black: "#212121",
    gray: "#eeeeee",
    darkGray: "#4c4c4c",
    darkestGray: "#1f1f1f",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024, // Adjusted from 960 to 1024
      lg: 1440,
      xl: 1920,
    },
  },
});

export default theme;
