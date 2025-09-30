import { Grid } from '@mui/material'
import './projectDetail.css'
import React from 'react'
import OverView from '../../components/projectDetail/OverView'
import AboutPorject from '../../components/projectDetail/AboutPorject'

export default function ProjectDetail() {

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
        // images: [
        //     { img: LivingRoom, lable: 'LivingRoom' },
        //     { img: Kitchen, lable: 'Kitchen' },
        //     { img: BedRoom, lable: 'BedRoom' },
        //     { img: Layout, lable: 'Layout' },
        // ],
        project_detail: {
            developer: 'ABC promoters',
            configurations: 'By ABC Developers india ltd',
            tower: 1,
            unit: 10
        }
    }

    return (
        <Grid container spacing={2} className='root' >
            <OverView value={data}  />
            <AboutPorject/>
        </Grid>
    )
}
