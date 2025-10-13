import Grid from "@mui/material/Grid";
import React from "react";
import Customcard from "../../hoc/CustomCard";
import { Chip, Typography } from "@mui/material";
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from "@mui/icons-material/Bathtub";

export default function ImgCardList() {
  const cardContent = () => {
    return (
      <>
        <Grid
          size={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="div">
            12 Lacs
          </Typography>
          <Typography variant="subtitle2" color="primary">
            #001
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="caption" color="textDisabled">
            2 BHK home in near guindy
          </Typography>
        </Grid>
        <Grid container size={12} spacing={1} >
          <Chip icon={<BedIcon />} label="2 Bedroom" variant="outlined" />
          <Chip icon={<BathtubIcon />} label="2 Bathrooms" variant="outlined" />
        </Grid>
      </>
    );
  };

  return (
    <Grid container>
      <Customcard
        imgURL="https://github.com/chrisjashok/assets/blob/main/images/YogaDeck.png?raw=true"
        sx={{ width: "25rem" }}
        imgSize="large"
        cardContent={cardContent}
        title="lizard"
      />
    </Grid>
  );
}
