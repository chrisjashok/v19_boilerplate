import Grid from '@mui/material/Grid'
import React from 'react'
import "./index.css"
import CustomDrawer from '../../hoc/CustomDrawer'
import { Button } from '@mui/material'
import logo from '../../assets/images/sample_logo.png'
import { useNavigate } from 'react-router-dom'

export default function TopBar(params) {
    const { color, handleClick } = params
    const nav = useNavigate()
    return (
        <Grid container spacing={2} className="topBar_root" >
            <Grid className="logo_container">
                <img src={logo} className='logo' />
            </Grid>
            <Grid className="topMenuDrawer" >
                <Button
                    size='small'
                    variant='text'
                    className='button'
                    onClick={() => handleClick('about')}
                    sx={{
                        fontFamily: '"Roboto", "Helvetica", "Arial", serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        fontStyle: 'normal',
                        letterSpacing: '0.5px',
                        //color: 'white',
                    }} >About</Button>
                <Button
                    size='small'
                    variant='text'
                    className='button'
                    onClick={() => handleClick('amenities')}
                    sx={{
                        fontFamily: '"Roboto", "Helvetica", "Arial", serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        fontStyle: 'normal',
                        letterSpacing: '0.5px',
                        //color: 'white',
                    }} >Amenities</Button>
                <Button
                    size='small'
                    variant='text'
                    className='button'
                    onClick={() => handleClick('plans')}
                    sx={{
                        fontFamily: '"Roboto", "Helvetica", "Arial", serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        fontStyle: 'normal',
                        letterSpacing: '0.5px',
                        //color: 'white',
                    }} >plans</Button>
                <Button
                    size='small'
                    variant='text'
                    className='button'
                    onClick={() => handleClick('location')}
                    sx={{
                        fontFamily: '"Roboto", "Helvetica", "Arial", serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        fontStyle: 'normal',
                        letterSpacing: '0.5px',
                        //color: 'white',
                    }} >Location</Button>
            </Grid>
            <Grid className="topMenu">
                <Button
                    size='small'
                    variant='outlined'
                    className='button'
                    onClick={() => nav('projectdetail')}
                    sx={{
                        fontFamily: '"Roboto", "Helvetica", "Arial", serif',
                        fontWeight: 700,
                        fontSize: '0.9rem',
                        textTransform: 'uppercase',
                        fontStyle: 'normal',
                        letterSpacing: '0.5px',
                        //color: 'white',
                    }}>More Details</Button>
            </Grid>
        </Grid>
    )
}
