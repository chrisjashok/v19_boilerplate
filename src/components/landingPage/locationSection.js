import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import "./index.css";
// import { useNavigate } from "react-router-dom";

const LocationSection = React.forwardRef((props, ref) => {
  // const nav = useNavigate();

  const { data } = props;
  return (
    <Grid
      ref={ref}
      container
      spacing={2}
      size={{ xs: 3, sm: 3, md: 12, lg: 12 }}
      className="location-root"
    >
      <Grid>
        <iframe
          title="Embedded Content"
          src={data?.url}
          width="700"
          height="550"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid>
      <Grid className="location-body">
        <Typography
          variant="h4"
          sx={{ fontFamily: '"Montserrat", sans-serif', color: "#9a3f81" }}
        >
          {data?.title}
        </Typography>
        <Typography>{data?.description}</Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#9a3f81",
            padding: "8px 20px",
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: "600",
            fontSize: "1.2rem",
          }}
        >
          Enquire Now
        </Button>
      </Grid>
    </Grid>
  );
});

export default LocationSection;
