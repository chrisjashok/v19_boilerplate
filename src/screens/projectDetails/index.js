import "./index.css";

import Grid from "@mui/material/Grid";
import ProjectImagegrp from "../../components/projectDetail/ProjectImagegrp";
import ProjectDescription from "../../components/projectDetail/ProjectDescription";
import ProjectPriceCard from "../../components/projectDetail/ProjectPriceCard";
import { useState } from "react";
import ProjectOwner from "../../components/projectDetail/ProjectOwner";
import ProjectHighlights from "../../components/projectDetail/ProjectHighlights";

export default function ProjectDetail() {
  const [expand, setExpand] = useState(false);

  const Icons = ["bolt_rounded","water_drop_outlined","add_moderator_rounded","elevator_rounded","solar_power","child_care_Rounded","sports_cricket_rounded", "gpp_good_rounded"]

  return (
    <Grid container className="root">
      <Grid
        size={7}
        rowGap={2}
        className="root-item"
        sx={{ justifyContent: expand ? "flex-start" : "space-evenly"}}
      >
        <ProjectImagegrp />
        <ProjectDescription isExpand={(e) => setExpand(e)} />
        <ProjectHighlights data={Icons} />
        <ProjectOwner />
      </Grid>
      <Grid size={2} className="root-item1">
        <ProjectPriceCard />
      </Grid>
    </Grid>
  );
}
