// import { Grid } from '@mui/system'
// import React from 'react'

//  const Footer =  React.forwardRef(({},ref) => {
//   return (

//   )
// });

// export default Footer;

import React from "react";
import { Divider, Grid, Typography } from "@mui/material"; // or any other component you're using
import "./index.css";
import logo from "../../assets/images/sample_logo.png";

// Must use a named function or arrow function inside React.forwardRef
const Footer = React.forwardRef((props, ref) => {
  return (
    <Grid
      container
      spacing={2}
      size={{ xs: 3, sm: 3, md: 10, lg: 12 }}
      ref={ref}
      className="footer-root"
    >
      <Grid
        size={{ xs: 3, sm: 3, md: 3, lg: 2 }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-end",
          height: "70%",
        }}
      >
        <Grid
          size={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img src={logo} alt={logo} className="footer-logo" />
          {/* <Typography className='footer-title'>ABC BUILDERS</Typography> */}
        </Grid>
        {/* <Grid size={6.3} sx={{display:'flex', flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <LocalPhoneIcon className='footer-content' />
          <Typography className='footer-content'>+91 9876543210</Typography>
        </Grid> */}
      </Grid>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Grid size={{ xs: 3, sm: 3, md: 6, lg: 6 }} sx={{ height: "100%" }}>
        <Typography className="footer-contenttitle">ABOUT US</Typography>
        <Typography className="footer-content">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </Typography>
      </Grid>
      {/* <Grid size={{ xs: 3, sm: 3, md: 4, lg: 2 }} sx={{ height: '100%', border: '1px solid red',height: '70%', }} >

      </Grid> */}
    </Grid>
  );
});

export default Footer;
