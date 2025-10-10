import { Box, Grid, Typography } from '@mui/material'
import './index.css'


export default function NearByPlaces() {


  const imageData = [
    { id: 1, Title: 'Chennai Airport', img: 'https://github.com/chrisjashok/assets/blob/main/images/Chennai-Airport.png?raw=true', description: 'A mere 6 km drive, providing ease for frequent travellers.' },
    { id: 2, Title: 'Ekkattuthangal Metro Station', img: 'https://github.com/chrisjashok/assets/blob/main/images/Ekkattuthangal-Metro-Station.png?raw=true', description: 'Only 500 meters away, ensuring quick access to metro services.' },
    { id: 3, Title: 'Guindy National Park', img: 'https://github.com/chrisjashok/assets/blob/main/images/Guindy-National-Park.png?raw=true', description: 'Located 6 km away, offering a green escape within the city' },
    { id: 4, Title: 'Kathipara Junction', img: 'https://github.com/chrisjashok/assets/blob/main/images/Kathipara-Junction.png?raw=true', description: 'Just 1 km away, offering seamless road connectivity' },
  ];

  let imageMap = []

  for (let i = 30; i >= 10; i -= 10) {
    imageMap.push(i)
  }


  // console.log('gridHeight',height)
  return (
    <Grid container size={{ xs: 10, sm: 8, md: 10, lg: 10 }} className='nearbyplace-root'  >
      <Grid size={{ xs: 10, sm: 3, md: 4, lg:3 }} className='nearbyplace-titlecontainer'>
        <Typography variant='h4' className='nearbyplace-title' >Perfectly positioned</Typography>
        <Typography variant='h5' className='nearbyplace-subtitle'>nearby places</Typography>
      </Grid>
      <Grid container size={{ md: 12 }} className='nearbyplace-body' >
        {imageData.map((item, index) => (
          <Grid size={{ xs: 10, sm: 3, md: 2, lg: 2 }} className='nearbyplace-content' sx={{ height: '70%', marginBottom: imageMap[index] }} >
            <Box component='img' src={item.img} alt={item.id} className='nearbyplace-img' />
            <Grid className='nearbyplace-imgContent' >
              <Typography variant='subtitle2' className='nearbyplace-contentTitle' >{item?.Title}</Typography>
              <Typography variant='caption' className='nearbyplace-contentdes' >{item?.description}</Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
