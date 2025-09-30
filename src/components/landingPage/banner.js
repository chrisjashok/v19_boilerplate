import React from 'react';
import { Box } from '@mui/material';
import './index.css'

export default function Banner(params) {
    const {src} = params
    return (
        <Box className="banner_container" sx={{height:'100vh'}} >
            <img src={src} className='banner_img' />
        </Box>
    );
}
