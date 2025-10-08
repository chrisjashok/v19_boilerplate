import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import './index.css'


const AmenitiesIcons = React.forwardRef(({ title = 'Amenities', cards = [] }, ref) => {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Grid size={{ xs: 3, sm: 5, md: 10, lg: 10 }} className='amenities-root' ref={ref}>
      {/* 🔹 Title */}
      <Grid size={{ md: 3, lg: 1.4 }} className='amenities-titlecontainer'>
        <Typography
          variant="h4"
          className='nearbyplace-title'
        >
          {title}
        </Typography>
      </Grid>

      {/* 🔹 Icon Grid */}
      <Grid
        container
        size={{ xs: 3, sm: 12, md: 10, lg: 10 }}
        columnSpacing={45}
        rowSpacing={{ xs: 40, sm: 40, md: 15, lg: 20 }}
        sx={{ display: 'flex', position: 'absolute', justifyContent: 'center', alignItems: 'center' }}
      >
        {cards.map((card, index) =>

        (
          <Grid

            key={index}
            sx={{
              // border:'1px solid red',
              height: '5rem',
              width: '5rem',
              textAlign: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >

            <Box
              component="img"
              src={card?.path}
              alt={card?.label}
              sx={{
                width: 64,
                height: 64,
                mx: 'auto',
                mb: 1.5,
                objectFit: 'contain',
              }}
            />

            <Typography variant="subtitle1" fontWeight="500">
              {card?.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
});

export default AmenitiesIcons;
