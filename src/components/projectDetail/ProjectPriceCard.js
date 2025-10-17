import "./index.css";
import { Grid, Typography } from "@mui/material";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";

export default function ProjectPriceCard() {
  return (
    <Grid container size={11} spacing={2} className="project-price-card">
      <Grid size={12}>
        <Typography variant="h5" className="project-description-Title">
          {" "}
          ₹ 12 Lacs
        </Typography>
        <Typography variant="body1" className="project-description-Title">
          2 BHK Euphoria house near kodambakkam
        </Typography>
      </Grid>
      <Grid size={12} sx={{ padding: "4px 0px" }}>
        <Typography variant="h5" className="project-description-Title">
          1450 SQFT
        </Typography>
        <Typography variant="body2" className="project-description-Title">
          @120.8 per sqft
        </Typography>
      </Grid>
      <Grid
        size={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #fff",
          borderRadius: "0.7rem",
        }}
      >
        <DirectionsTransitIcon sx={{ color: "#fff" }} />
        <Typography variant="caption" className="project-description-Title">
          1.5 KMs From kodambakkam Junction
        </Typography>
      </Grid>
    </Grid>
  );
}
