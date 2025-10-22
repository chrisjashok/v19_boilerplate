import React from 'react';
import { Box } from '@mui/material';
import bannerImg from '../../assets/images/download.webp'; // Adjust your path

export default function Banner() {
    return (
        <Box className="banner_container">
            <img src={bannerImg} alt='img' className='banner_img' />
        </Box>
    );
}
