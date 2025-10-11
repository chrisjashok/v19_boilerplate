import Grid from "@mui/material/Grid";
import React from "react";
import Customcard from "../../hoc/CustomCard";
import { Typography } from "@mui/material";

export default function ImgCardList() {
  const cardContent = () => {
    return (
      <>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </>
    );
  };

  return (
    <Grid container>
      <Customcard
        imgURL="https://github.com/chrisjashok/assets/blob/main/images/YogaDeck.png?raw=true"
        sx={{
          height: "30vh",
          maxWidth: "15vw",
          border: "1px solid red",
          display: "flex",
          flexDirection: "column",
        }}
        imgSize="small"
        cardContent={cardContent}
        title="lizard"
      />
    </Grid>
  );
}
