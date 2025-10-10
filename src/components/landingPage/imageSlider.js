import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import './index.css'

const ImageSlider = React.forwardRef(({ images = [], interval = 3000 }, ref) => {
  // const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const getImageAt = (index) => images[(index + maxSteps) % maxSteps];

  // console.log('getImageAt',getImageAt(activeStep - 1), 'side')

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % maxSteps);
    }, interval);

    return () => clearInterval(timer);
  }, [interval, maxSteps]);

  // const handleNext = () => {
  //   setActiveStep((prev) => (prev + 1) % maxSteps);
  // };

  // const handleBack = () => {
  //   setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  // };

  const renderImageCard = (item, type = 'side') => {
    const size = type === 'center' ? '75vW' : '75VW'; // want's to change the side image size, change the else value
    const opacity = type === 'center' ? 1 : 0.6;

    return (
      <Box
        // key={item.label}
        className='slider-img-container'
        sx={{ width: type === 'center' ? '60%' : '20%', opacity }}
        // sx={{ width: '10%',opacity}}
        ref={ref}
      >
        <Box
          sx={{
            width: size,
            height: '100%',
            // mx: 'auto',
            // mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

          }}
        >

          <Box
            component="img"
            src={item?.path}
            alt={item?.label}
            sx={{
              width: '97%',
              height: '100%',
              objectFit: 'contain',
            }}
          />

        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '110vh', justifyContent: 'flex-end', alignItems: 'center', maxWidth: '100%', overflow: 'hidden',margin:'7rem 0 0 0' }}>
      {/* Title */}
      <Box sx={{ textAlign: 'center', margin: '0 0 1rem 0' }}>
        <Typography
          variant="h4"
          sx={{  fontWeight: 600, color: '#9a3f81' }}
        >
          Clubhouse Amenities
        </Typography>
      </Box>

      {/* Carousel Row */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          height: '100vh',
        }}
      >
        {/* Left (1/3 visible) */}
        <Box sx={{ transform: 'translateX(0%)' }}>
          {renderImageCard(getImageAt(activeStep - 1), 'side')}
        </Box>

        {/* Center (full visible) */}
        <Box >{renderImageCard(getImageAt(activeStep), 'center')}</Box>

        {/* Right (1/3 visible) */}
        <Box sx={{ transform: 'translateX(0%)' }}>
          {renderImageCard(getImageAt(activeStep + 1), 'side')}
        </Box>
      </Box>

      {/* Stepper */}
      {/* <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </Button>
        }
      /> */}
    </Box>
  );
});

export default ImageSlider;
