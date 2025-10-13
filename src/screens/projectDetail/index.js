import Grid from "@mui/material/Grid";
import React from "react";
import ImgCardList from "../../components/moreDetail/ImgCardList";
// import OverView from "../../components/projectDetail/OverView";
// import AboutPorject from "../../components/projectDetail/AboutPorject";

export default function ProjectDetail() {
  return (
    <Grid
      container
      size={12}
      spacing={5}
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height:'100vh',
        backgroundColor:'#F9F6F3'
      }}
    >
      <Grid size={12}>
        
      </Grid>
      {/* <OverView value={data}  />
            <AboutPorject/> */}
      <Grid container size={8} spacing={3} sx={{display:'flex', flexDirection:'row'}} >
        {Array(6)
          .fill()
          .map(() => {
            return <ImgCardList />;
          })}
      </Grid>
    </Grid>
  );
}
