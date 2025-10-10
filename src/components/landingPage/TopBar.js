import Grid from "@mui/material/Grid";
import "./index.css";
import { Button } from "@mui/material";
import logo from "../../assets/images/sample_logo.png";
import { useNavigate } from "react-router-dom";

export default function TopBar(params) {
  const { handleClick } = params;
  const nav = useNavigate();
  return (
    <Grid container spacing={2} className="topBar_root">
      <Grid className="logo_container">
        <img src={logo} alt={logo} className="topBar-logo" />
      </Grid>
      <Grid className="topMenuDrawer">
        <Button
          size="small"
          variant="text"
          className="button"
          onClick={() => handleClick("about")}
        >
          About
        </Button>
        <Button
          size="small"
          variant="text"
          className="button"
          onClick={() => handleClick("amenities")}
        >
          Amenities
        </Button>
        <Button
          size="small"
          variant="text"
          className="button"
          onClick={() => handleClick("plans")}
        >
          plans
        </Button>
        <Button
          size="small"
          variant="text"
          className="button"
          onClick={() => handleClick("location")}
        >
          Location
        </Button>
      </Grid>
      <Grid className="topMenu">
        <Button
          size="small"
          variant="outlined"
        //   className="button"
          onClick={() => nav("projectdetail")}
          sx={{
            fontFamily: '"Montserrat", sans-serif',
            fontWeight: 600,
            fontSize: "0.9rem",
            textTransform: "uppercase",
            fontStyle: "normal",
            letterSpacing: "0.5px",
            color: '#ffffffff',
            backgroundColor:'#9a3f81',
            padding:'8px 24px'
          }}
        >
          More Details
        </Button>
      </Grid>
    </Grid>
  );
}
