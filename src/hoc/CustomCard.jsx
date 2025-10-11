import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";


/**
 * @typedef {string} classNameType
 * @typedef {string} titleType
 * @typedef {} styleType
 * @typedef {} sxType
 * @typedef {string} imgURLType
 * @typedef {'small' | 'medium' | 'large'} imgSizeType
 * @typedef {} cardContentType
 */

/**
 * @param {{className?:classNameType,title?:titleType, style?:styleType, sx?:sxType, imgURL?:imgURLType,titleVariant?:titleVariantType,imgSize?:imgSizeType,cardContent?:()=>cardContentType}} props
 */

function Customcard(props) {
  const {
    className = "",
    title = '',
    style,
    sx,
    imgURL = "",
    imgSize = "medium",
    cardContent,
  } = props;

  const classes = myStyles;

  return (
    <Card style={style??null} className={className??null} sx={sx??null}>
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
      >
        <CardContent>{cardContent && typeof cardContent === 'function' ? cardContent() : null}</CardContent>
      </CardMedia>
    </Card>
  );
}

export default Customcard;

const myStyles = {
  cardmedia_mid: { height: "10rem" },
  cardmedia_sml: { height: "7rem" },
  cardmedia_lrg: { height: "13rem" },
};
