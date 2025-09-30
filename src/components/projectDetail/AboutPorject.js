import { Box, Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react';
import './index.css';
import BedRoom from '../../assets/images/BedRoom.png'

export default function AboutPorject(props) {
    const {value} = props
    return (
        <Grid container spacing={2} className='about_root' >
            <Grid size={{ xs: 12, sm: 6, md: 12 }} >
                <Typography variant='h5' color='#001f3f' fontWeight={'800'}  >About Project</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 12 }} sx={{ display: 'flex', flexDirection: 'column' }} >
                <Grid sx={{ display: 'flex', height: '5rem', width: '100%', justifyContent:'space-around' }} >
                    <Box
                        component="img"
                        src={BedRoom}
                        alt='ABC'
                        sx={{
                            width: '15%',
                            height: '100%',
                            borderRadius: 2,
                            objectFit: 'cover',
                            display: 'block',
                        }} />
                        <Grid>
                            <Typography variant='h6' fontWeight={'600'} color='#001f3f' >ABC promoters</Typography>
                            <Typography variant='subtitle2' color='#2c3e50'>By ABC Developers india ltd.</Typography>
                        </Grid>
                        <Divider orientation='vertical' variant='middle' flexItem  />
                        <Grid>
                            <Typography variant='subtitle2' color='#2c3e50'>Configurations</Typography>
                            <Typography variant='subtitle2' color='#001f3f' fontSize={16} fontWeight={'600'}>By ABC Developers india ltd.</Typography>
                        </Grid>
                        <Divider orientation='vertical' variant='middle' flexItem  />
                        <Grid>
                            <Typography variant='subtitle2' color='#2c3e50'>Tower & Unit</Typography>
                            <Typography variant='subtitle2' color='#001f3f' fontSize={16} fontWeight={'600'}>1 Tower, 10 Units</Typography>
                        </Grid>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent:'flex-end', alignItems:'center', height: '5rem', width: '100%' }}>
                    <Button variant='outlined' size='small' sx={{height:'2.7rem', borderRadius:'3rem',margin:'0.5rem'}} > Download Brochure </Button>
                    <Button variant='outlined' size='small' sx={{height:'2.7rem', borderRadius:'3rem',margin:'0.5rem'}} > Follow Project </Button>
                </Grid>
            </Grid>
        </Grid>
    )
}
