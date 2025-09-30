import { Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Buttonoption() {
    return (
        <Grid container spacing={2} className='btnOption_container' >
            <Typography variant='h5' >Sell or Rent Your property Free here</Typography>
            <Grid className='btn_item' >
                <Button size='small' variant='outlined' className='' >Rent</Button>
                <Button size='small' variant='contained' className='' >Buy</Button>
            </Grid>
        </Grid>
    )
}
