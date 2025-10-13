import { CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import SxProps from '@mui/material'

/**
 * @typedef {string} classNameType
 * @typedef {string} titleType
 * @typedef {} styleType
 * @typedef {import("@mui/material").SxProps<import("@mui/material").Theme>} sxType
 * @typedef {string} imgURLType
 * @typedef {'small' | 'medium' | 'large'} imgSizeType
 * @typedef {} cardContentType
 * @typedef {} cardActionsType
 */

/**
 * @param {{
 * className?:classNameType,
 * title?:titleType,
 * style?:styleType,
 * sx?:sxType,
 * imgURL?:imgURLType,
 * titleVariant?:titleVariantType,
 * imgSize?:imgSizeType,
 * cardContent?:()=>cardContentType
 * cardActions?:()=>cardActionsType
 * }} props
 */

function Customcard(props) {
  const {
    className = "",
    title = "",
    style,
    sx,
    imgURL = "",
    imgSize = "medium",
    cardContent,
    cardActions
  } = props;

  const classes = myStyles;

  return (
    <Card style={style ?? null} className={className ?? null} sx={sx ?? null}>
      <CardMedia
        image={imgURL}
        title={title}
        sx={
          imgSize === "medium"
            ? classes.cardmedia_mid
            : imgSize === "small"
            ? classes.cardmedia_sml
            : classes.cardmedia_lrg
        }
      />
      <CardContent>
        {cardContent && typeof cardContent === "function"
          ? cardContent()
          : null}
      </CardContent>
      <CardActions>
        {cardActions && typeof cardActions === "function"
          ? cardActions()
          : null}
      </CardActions>
    </Card>
  );
}

export default Customcard;

const myStyles = {
  cardmedia_mid: { height: 100 },
  cardmedia_sml: { height: 150 },
  cardmedia_lrg: { height: 200 },
};
