import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const CustomImgCollage = ({ images }) => {
  if (!images || images.length === 0) return null;

  if (images.length === 1) {
    return (
      <Box
        component="img"
        src={images[0]}
        alt="Single"
        sx={{
          width: '100%',
          height: 300,
          borderRadius: 2,
          objectFit: 'cover',
        }}
      />
    );
  }

  const topImage = images[0]?.img;
  const bottomImages = images.slice(1, 4); // Max 3
  const remainingCount = images.length - 4;

  return (
    <Box >
      <Grid container spacing={0}>
        {/* Top full-width image */}
        <Grid item xs={12}>
          <Box
            component="img"
            src={topImage}
            alt="Top"
            sx={{
              width: '20vw',
              height: 220,
              borderRadius: 2,
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </Grid>

        {/* Bottom row (max 3 images) */}
        <Grid container item xs={12} spacing={0} sx={{ height: '10vh', width: '20vw', justifyContent: 'space-between', alignItems: 'center' }} >
          {bottomImages.map((img, index) => (
            <Grid item xs={4} key={index} >
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '3.8rem',
                  borderRadius: 2,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src={img?.img}
                  alt={`Bottom ${index + 1}`}
                  sx={{
                    width: '7.5rem',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 2,
                    display: 'block',
                  }}
                />

                {/* Overlay "+N" on last image if more than 4 */}
                {index === 2 && remainingCount > 0 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(0, 0, 0, 0.6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="h6" color="white" fontWeight="bold">
                      +{remainingCount}
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomImgCollage;
