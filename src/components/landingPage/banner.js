import React from 'react';
import { Box } from '@mui/material';
import bannerImg from '../../assets/images/Banner.png'; // Adjust your path
import './index.css'

export default function Banner() {
    return (
        <Box className="banner_container" sx={{height:'100vh'}} >
            <img src={bannerImg} className='banner_img' />
        </Box>
    );
}
