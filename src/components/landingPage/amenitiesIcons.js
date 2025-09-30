import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';


const AmenitiesIcons = React.forwardRef(({ title = 'Amenities', cards = [] }, ref) => {

  const [visible, setVisible] = useState(false);
  const baseUrl = 'file:///D:'


  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box sx={{ width: '100%', height: '100vh' }} ref={ref}>
      {/* 🔹 Title */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 'bold',
          color: '#1976d2',
          mb: 4,
        }}
      >
        {title}
      </Typography>

      {/* 🔹 Icon Grid */}
      <Grid
        container
        spacing={3}
        columns={12}
        sx={{ justifyContent: 'space-evenly' }}
      >
        {cards.map((card, index) =>

        (
          <Grid
            item
            xs={20}
            sm={10}
            md={4} // ✅ 5 items per row (20 / 4 = 5)
            key={index}
            sx={{
              textAlign: 'center',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease',
            }}
          >
            {/* 🔹 Icon (SVG Component or Image) */}
            {card.Icon ? (
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <card.Icon width="100%" height="100%" />
                
              </Box>
            ) : (
              <Box
                component="img"
                src={`${baseUrl}${card.path}`}
                alt={card.label}
                sx={{
                  width: 64,
                  height: 64,
                  mx: 'auto',
                  mb: 1.5,
                  objectFit: 'contain',
                }}
              />
            )}

            {/* 🔹 Label */}
            <Typography variant="subtitle1" fontWeight="500">
              {card.label}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
});

export default AmenitiesIcons;
