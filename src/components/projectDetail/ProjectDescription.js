import { Button, Grid, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import "./index.css";

export default function ProjectDescription(props) {
  const {isExpand} = props
  const [view, setView] = useState(false);
  const [linecount, setLineCount] = useState(0);
  const textRef = useRef(null);

  React.useEffect(() => {
    if (textRef.current) {
      const element = textRef.current;
      const renderedHeight = element.offsetHeight;
      const computedStyle = window.getComputedStyle(element);
      let lineHeight = parseFloat(computedStyle.lineHeight);
      if (lineHeight > 0) {
        setLineCount(Math.round(renderedHeight / lineHeight));
      }
    }
  }, []);


  return (
    <Grid container size={12} className="project-description_root">
      <Grid size={12} className="project-description-item">
        <Typography variant="h5" className="project-description-Title">
          About Property
        </Typography>
      </Grid>
      <Grid size={12} className="project-description-item">
        {/* <Collapse in={!view} timeout={"auto"} component={"p"}  unmountOnExit> */}
        <Typography
          ref={textRef}
          variant="body1"
          className="project-description-Title"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: view ?  "2" : linecount,
            WebkitBoxOrient: "vertical",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. It is a long established fact that
          a reader will be distracted by the readable content of a page when
          looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using
          'Content here, content here', making it look like readable English.
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their default model text, and a search for 'lorem ipsum' will
          uncover many web sites still in their infancy. Various versions have
          evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
        </Typography>
        {/* </Collapse> */}
        {linecount > 0 && (
          <Button
            size="small"
            onClick={()=> {setView(!view); isExpand(!view)}}
            sx={{
              textTransform: "none",
              mt: 0,
              fontSize: "0.95rem",
              color: "#F5F5F5",
            }}
          >
            {view ? "View More" : "View Less"}
          </Button>
        )}
      </Grid>
    </Grid>
  );
}
