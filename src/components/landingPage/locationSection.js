import { Button, Grid, Typography } from '@mui/material'
import React from 'react'
import './index.css'

const LocationSection = React.forwardRef((props,ref) =>{

    const {data}=props
    return (
        <Grid ref={ref} container spacing={2} className='location-root' >

            <Grid>
                <iframe src={data?.url} width="700" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid className='location-body'>
                <Typography variant='h4' color='primary' >{data?.title}</Typography>
                <Typography>{data?.description}</Typography>
                <Button variant='contained'>Enquire Now</Button>
            </Grid>

        </Grid>
    )
});


export default LocationSection;