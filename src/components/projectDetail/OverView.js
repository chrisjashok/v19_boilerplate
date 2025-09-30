


import React from 'react'
import './index.css'
import { Box, Grid, IconButton, Menu, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomImgCollage from '../../hoc/CustomeImgCollage';

import Kitchen from '../../assets/images/Kitchen.png';
import LivingRoom from '../../assets/images/LivingRoom.png';
import BedRoom from '../../assets/images/BedRoom.png';
import Layout from '../../assets/images/Layout.png';

export default function OverView(props) {
    const [open, setOpen] = React.useState(false)
    const { value } = props

    const data = {
        price: 12.7,
        price_scale: 'Lacs',
        description: '3 BHK Flat 1200 Sq-ft For Rent in Apats, Kodambakkam,Chennai',
        property_details: {
            sqft: 1400,
            developers: 'ABC Developers',
            project: "ABC Villa's",
            transaction_Type: 'New property',
            Property_status: 'Ready to occupy',
            lift: 1,
            furnished_status: 'Furnished',
        },
        images: [
            { img: LivingRoom, lable: 'LivingRoom' },
            { img: Kitchen, lable: 'Kitchen' },
            { img: BedRoom, lable: 'BedRoom' },
            { img: Layout, lable: 'Layout' },
        ],
        project_detail: {
            developer: 'ABC promoters',
            configurations: 'By ABC Developers india ltd',
            tower: 1,
            unit: 10
        }
    }



    return (
        <Grid container spacing={2} className='overView_root'>
            <Box className='box' >
                <Grid className='title_section' >
                    <Typography variant='h5' color='#001f3f' fontWeight={'800'} >₹{value?.price} {value?.price_scale}</Typography>
                    <Typography variant='subtitle2' color='#2c3e50' >{value?.description}</Typography>
                </Grid>
                {/* <Grid className='iconbtn_section' >
                    <IconButton  onClick={() => setOpen(true)} >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu 
                    open={open} 
                    onClose={()=>setOpen(false)}
                    slotProps={{
                        paper: {
                            style: {
                               height:'30px',
                               width:'30px',
                               justifyContent:'flex-start'
                            },
                        },
                        list: {
                            'aria-labelledby': 'long-button',
                        },
                    }} ></Menu>
                </Grid> */}
            </Box>
            <Grid sx={{ display: 'flex', flexDirection: 'row', width: '100%', height: '100%' }}>
                <Box className='img_section' >
                    <CustomImgCollage images={data?.images} />
                </Box>
                <Grid container column={{ sm: 2, md: 3, xs: 5 }} size={12} columnSpacing={2} sx={{ display: 'flex', flexDirection: 'row' }}  >
                    {Object.entries(value?.property_details).map(([key, value]) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', height: '6rem', }} >
                            <Typography variant='subtitle2' color='#2c3e50' >{key}</Typography>
                            <Typography color='#001f3f' fontSize={17.5} fontWeight={'600'} >{value}</Typography>
                        </Grid>
                    ))}


                </Grid>

            </Grid>

        </Grid>
    )
}
