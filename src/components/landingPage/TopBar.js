import Grid from '@mui/material/Grid'
import React from 'react'
import "./index.css"
import CustomDrawer from '../../hoc/CustomDrawer'
import { Button } from '@mui/material'
import logo from '../../assets/images/sample_logo.png'
import { useNavigate } from 'react-router-dom'

export default function   TopBar(params) {
    const { color, handleClick } = params
    const nav = useNavigate()
    return (
        <Grid container spacing={2} className="topBar_root" >
            <Grid className="logo_container">
                <img src={logo} className='logo' />
            </Grid>
            <Grid className="topMenuDrawer" >
                <Button size='small' variant='text' className='button' onClick={()=>handleClick('about')} >About</Button>
                <Button size='small' variant='text' className='button' onClick={()=>handleClick('amenities')} >Amenities</Button>
                <Button size='small' variant='text' className='button' onClick={()=>handleClick('plans')} >plans</Button>
                <Button size='small' variant='text' className='button' onClick={()=>handleClick('location')}  >Location</Button>
            </Grid>
            <Grid className="topMenu">
                <Button size='small' variant='outlined' className='button' onClick={()=>nav('projectdetail')} >More Details</Button>
            </Grid>
        </Grid>
    )
}
