import "./index.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

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
        <Grid
          size={6}
          rowSpacing={2}
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            padding: "4px 8px",
            // border: "1px solid red",
          }}
        >
          <Grid
            size={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <Typography variant="h5" className="project-description-Title">
              Chris
            </Typography>
            <Typography variant="body2" className="project-description-Title">
              Owner
            </Typography>
          </Grid>
          <Grid
            size={5}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
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
        <Grid
          container
          size={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            height: "8rem",
          }}
        >
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "#fff",
              color: "#9a3f81",
              fontFamily: "Montserrat, sans-serif",
              fontWeight:'600'
            }}
          >
            View Number
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
