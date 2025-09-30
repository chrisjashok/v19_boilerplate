// import { Grid } from '@mui/system'
// import React from 'react'

//  const Footer =  React.forwardRef(({},ref) => {
//   return (
    
//   )
// });


// export default Footer;




import React from 'react';
import { Box, Grid } from '@mui/material'; // or any other component you're using

// Must use a named function or arrow function inside React.forwardRef
const Footer = React.forwardRef((props, ref) => {
  return (
    <Grid container spacing={2} ref={ref} className="footer_root" >

    </Grid>
  );
});

export default Footer;
