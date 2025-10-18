import "./index.css";
import { Box, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import React from "react";

export default function ProjectOwner() {
  return (
    <Grid container size={12} className="project-owner-root">
      <Grid size={12} className="project-owner-item">
        <Typography variant="h5" className="project-description-Title">
          Project Owner
        </Typography>
      </Grid>
      <Grid size={12} className="project-owner-item1">
        <Box
          component={"img"}
          src="https://github.com/chrisjashok/assets/blob/main/images/owner.webp?raw=true"
          className="project-owner-img"
        />
        <Grid size={6} sx={{display:'flex',flexDirection:'column', justifyContent:'space-evenly', alignContent:'space-evenly'}} >
          <Typography variant="h5" className="project-description-Title">
            Chris
          </Typography>
          <Typography variant="body2" className="project-description-Title">
            Owner
          </Typography>
          <Grid container>
            <LocationOnIcon sx={{ color: "#fff" }} />
            <Typography className="project-description-Title">
              Kodambakkam
            </Typography>
          </Grid>
          <Grid
          size={7}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="body2" className="project-description-Title">
              Listed properties:6
            </Typography>
            <Typography variant="body2" className="project-description-Title">
              verified properties:6
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
