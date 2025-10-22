import { Grid, Icon, Typography } from "@mui/material";
import "./index.css"
import React from "react";

export default function ProjectHighlights(props) {
  const { data } = props;
  return (
    <Grid
      container
      size={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#9a3f81",
        borderRadius: "1.2rem",
        padding: "4px 16px",
      }}
    >
      <Grid size={12}>
        <Typography variant="h5" className="project-description-Title">
          Project Highlights
        </Typography>
      </Grid>
      <Grid size={12} spacing={5} container sx={{padding:'8px 8px'}} >
        {data.map((item) => {
          return (
            <Grid size={3} columnSpacing={12} sx={{display:'flex',alignItems:'center',justifyContent:'space-evenly'}}>
              <Icon sx={{color:'#ffffff'}} >{item}</Icon>
              <Typography variant="subtitle2" className="project-description-Title"  >{item}</Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
