import { Grid, Icon } from '@mui/material'
import React from 'react'

export default function CoustomIconsGrp(props) {
    const {data=[],iconStyle={}} = props
  return (
    <Grid container  className=''>
        {data.map((item)=>{
            return <Icon sx={iconStyle}/>
        })}
    </Grid>
  )
}
