import { Grid, Typography } from "@mui/material";
import React from "react";
import "./index.css";
import logo from "../../assets/images/sample_logo.png";

export default function Overlay() {
  return (
    <Grid container size={12} className="overlay-root">
      <Grid
        container
        size={{ sm: 8, md: 10, lg: 8 }}
        className="overlay-itemcontainer"
      >
        <Grid size={4} className="overlay-titlecontainer">
          <img src={logo} alt="logo" className="overlay-logo" />
          <Typography>
            VGN Richmond Towers is strategically located in the heart of Guindy,
            just 1 km from Kathipara Junction, opposite Hotel Hilton, and
            Ekkatuthangal Metro Station is within walking distance. Out of 10.46
            acres of prime land in the heart of Guindy, VGN Richmond Towers is
            offering 14 floors of luxurious 2 & 3 BHK residences with
            sophistication and convenience.
          </Typography>
        </Grid>
        <>
          <Grid className="overlay-content-item">
            <Typography variant="h5" className="sub-title">
              252
            </Typography>
            <Typography>
              Luxury Residences
            </Typography>
            <Typography variant="h5" className="sub-title">
              7 Floors
            </Typography>
            <Typography>
              Clubhouse with rooftop infinity pool
            </Typography>
            <Typography variant="h5" className="sub-title">
              7 Floors
            </Typography>
            <Typography>
              Multi-Level Car Park Facility
            </Typography>
          </Grid>
          <Grid size={7} className="overlay-img-container">
            <img
              className="overlay-content-img"
              src={
                "https://github.com/chrisjashok/assets/blob/main/images/about-richmond-img.png?raw=true"
              }
              alt="img"
            />
          </Grid>
        </>
      </Grid>
    </Grid>
  );
}
