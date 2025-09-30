import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  MobileStepper,
  useTheme,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const ImageSlider = React.forwardRef(({ images = [], interval = 3000 },ref) => {
  console.log('images',JSON.stringify(images))
  const theme = useTheme();
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

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps);
  };

  const renderImageCard = (item, type = 'side') => {
    //  const isComponent = typeof item.img === 'function';

    const size = type === 'center' ? 900 : 450;
    const opacity = type === 'center' ? 1 : 0.6;

    return (
      <Box
        // key={item.label}
        sx={{
          justifyContent:'center',
          width: type === 'center' ? '60%' : '20%',
          flexShrink: 0,
          textAlign: 'center',
          // opacity,
          transition: 'all 0.3s ease',
          height:'100%',
        }}
        ref={ref}
      >
        <Box
          sx={{
            width: size,
            height: size,
            // mx: 'auto',
            // mb: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* {isComponent ? (
            <item.img width="100%" height="100%" />
          ) : ( */}
            <Box
              component="img"
              src={item.path}
              alt={item.label}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          {/* )} */}
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{  maxWidth: '100%', overflow: 'hidden',margin:'5rem 0 5rem 0'}}>
      {/* Title */}
      <Box sx={{ textAlign: 'center',margin:'1rem 0 2rem 0' }}>
        <Typography
          variant="h4"
          sx={{ fontStyle: 'italic', fontWeight: 600, color: '#1976d2' }}
        >
          Campus Amenities
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
          height:'65vh'
        }}
      >
        {/* Left (1/3 visible) */}
        <Box sx={{ transform: 'translateX(0%)',}}>
          {renderImageCard(getImageAt(activeStep - 1), 'side')}
        </Box>

        {/* Center (full visible) */}
        <Box >{renderImageCard(getImageAt(activeStep), 'center')}</Box>

        {/* Right (1/3 visible) */}
        <Box sx={{ transform: 'translateX(0%)'}}>
          {renderImageCard(getImageAt(activeStep + 1), 'side')}
        </Box>
      </Box>

      {/* Stepper */}
      <MobileStepper
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
      />
    </Box>
  );
});

export default ImageSlider;
