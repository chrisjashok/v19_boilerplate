import { Grid } from "@mui/material";
import CoustomImgGrp from "../../hoc/CoustomImgGrp";
import { useLocation } from "react-router-dom";
import './index.css'

export default function ProjectImagegrp(props) {
  const location = useLocation();
  const data = location.state;

  return (
    <Grid container className='project-detail_root' >
      <CoustomImgGrp src={data}  />
    </Grid>
  );
}
