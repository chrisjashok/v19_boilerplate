import { Breadcrumbs, Grid, Link, Typography } from "@mui/material";
import { useLocation, Link as RouteLink } from "react-router-dom";

export default function CustomBreadcrumb() {
  const location = useLocation();

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: "8px 16px",
        backgroundColor: "#fff",
      }}
    >
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        ={" "}
        <Link component={RouteLink} underline="hover" color="#9a3f81" to="/">
          Home
        </Link>
        ={" "}
        {pathnames.map((crumb, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          const label = crumb
            .replace(/[_-]/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

          return isLast ? (
            <Typography
              variant="subtitle2"
              key={routeTo}
              sx={{ textTransform: "capitalize",color:'#9a3f81' }}
            >
              {label}
            </Typography>
          ) : (
            <Link
              underline="hover"
              component={RouteLink}
              key={routeTo}
              to={routeTo}
              sx={{ textTransform: "capitalize",color:'#9a3f81' }}
            >
              {label}
            </Link>
          );
        })}
      </Breadcrumbs>
    </Grid>
  );
}
