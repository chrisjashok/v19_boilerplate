import { Box, Grid } from "@mui/material";
import "./hoc.css";

/**
 * @typedef {object | string} srcType
 * @typedef {string} altType
 * @typedef {string} classNameType
 */

/**
 * @param {{
 * src?:srcType,
 * alt?:altType,
 * className?:classNameType,
 * }} props
 */

export default function CoustomImgGrp(props) {
  const { src = "", alt = "img", className = "img-group-root" } = props;

  const image = src?.images;
  const slieced = image?.slice(0, 3);

  return (
    <Grid container size={12} spacing={1} className={className}>
      <Grid size={10} className="img-list-container">
        <Box
          component="img"
          alt={alt}
          src={typeof src === "object" ? src.image : src}
          className="img-group-media"
        />
      </Grid>
      {typeof src === "object" && (
        <Grid size={2} className="img-list-container1">
          {slieced?.map((item) => {
            return (
              <Box
                component="img"
                alt={alt}
                src={item}
                className="img-group-media1"
              />
            );
          })}
        </Grid>
      )}
    </Grid>
  );
}
