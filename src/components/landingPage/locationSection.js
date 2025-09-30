import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

const LocationSection = React.forwardRef((props,ref) =>{
    return (
        <Grid ref={ref} container spacing={2} sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', bgcolor: '#ebebebff',mx:5, my:5, paddingY:3 }} >

            <Grid>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31094.010620715166!2d80.2226176!3d13.0514944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1758800082758!5m2!1sen!2sin" width="700" height="550" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid sx={{ display: 'flex', flexDirection: 'column', width: '30%', height:'100%', justifyContent:'space-evenly' }}>
                <Typography variant='h4' color='primary' >Awesome Location, Heart of Chennai</Typography>
                <Typography>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                <Button variant='contained'>Enquire Now</Button>
            </Grid>

        </Grid>
    )
});


export default LocationSection;