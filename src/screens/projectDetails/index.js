import "./index.css";

import Grid from "@mui/material/Grid";
import ProjectImagegrp from "../../components/projectDetail/ProjectImagegrp";
import ProjectDescription from "../../components/projectDetail/ProjectDescription";
import ProjectPriceCard from "../../components/projectDetail/ProjectPriceCard";
import { useState } from "react";
import ProjectOwner from "../../components/projectDetail/ProjectOwner";

export default function ProjectDetail() {
  const [expand, setExpand] = useState(false);

  return (
    <Grid container className="root">
      <Grid
        size={7}
        rowGap={2}
        className="root-item"
        sx={{ justifyContent: expand ? "flex-start" : "space-evenly" }}
      >
        <ProjectImagegrp />
        <ProjectDescription isExpand={(e) => setExpand(e)} />
        <ProjectOwner />
      </Grid>
      <Grid size={2} className="root-item1">
        <ProjectPriceCard />
      </Grid>
    </Grid>
  );
}
