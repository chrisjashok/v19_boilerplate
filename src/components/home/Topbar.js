import Grid from '@mui/material/Grid'
import React from 'react'
import "./index.css"
import CustomDrawer from '../../hoc/CustomDrawer'
import { Button } from '@mui/material'
import logo from '../../assets/images/sample_logo.png'

export default function Topbar(params) {
    const { color } = params
    return (
        <Grid container spacing={2} className="topBar_root" >
            <Grid className="topMenuDrawer" >
                <CustomDrawer lable="Buy" />
                <CustomDrawer lable="Rent" />
                <CustomDrawer lable="Sell" />
            </Grid>
            <Grid className="logo_container">
                {/* <Button size='small' variant='contained' className='button' >LOGO</Button> */}
                 <img src={logo} alt={'img'} className='logo' />
            </Grid>
            <Grid className="help">
                <Button color={color??'inherit'} size='small' variant='text' className='button' >Help</Button>
            </Grid>
            <Grid className="topMenu">
                <Button size='small' variant='outlined' className='button' >Post Property</Button>
                <Button size='small' variant='contained' className='button' >Login</Button>
            </Grid>
        </Grid>
    )
}
