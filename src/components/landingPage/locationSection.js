import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const LocationSection = React.forwardRef((props,ref) =>{

    const {data}=props
    return (
        <Grid ref={ref} container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', bgcolor: '#ebebebff',mx:5, my:5, paddingY:3 }} >

            <Grid>
                <iframe src={data?.url} width="700" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', width: '30%', height:'100%', justifyContent:'space-evenly' }}>
                <Typography variant='h4' color='primary' >{data?.title}</Typography>
                <Typography>{data?.description}</Typography>
                <Button variant='contained'>Enquire Now</Button>
            </Grid>

        </Grid>
    )
});


export default LocationSection;