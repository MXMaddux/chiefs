import { Box, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.red,
  fontWeight: 700,
  padding: "16px 0",
}));

const StyledLink = styled(RouterLink)(({ theme }) => ({
  width: "100%",
  textDecoration: "none",
  [theme.breakpoints.up("sm")]: {
    width: "50%", // width on screens wider than sm
  },
  [theme.breakpoints.up("md")]: {
    width: "25%", // width on screens wider than md
  },
}));

const More = () => {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <StyledLink to="#">
            <Item>MORE NEWS {">"}</Item>
          </StyledLink>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledLink to="#">
            <Item>MORE VIDEOS {">"}</Item>
          </StyledLink>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledLink to="#">
            <Item>MORE PODCASTS {">"}</Item>
          </StyledLink>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StyledLink to="#">
            <Item>MORE PHOTOS {">"}</Item>
          </StyledLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default More;
