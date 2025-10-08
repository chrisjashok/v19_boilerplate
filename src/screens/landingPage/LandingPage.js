import React, { useEffect, useRef } from 'react'
import Banner from '../../components/landingPage/banner'
import TopBar from '../../components/landingPage/TopBar'
import ImageSlider from '../../components/landingPage/imageSlider'
import AmenitiesIcons from '../../components/landingPage/amenitiesIcons';
// import logo1 from '../../assets/Icon/atm.svg'
import LocationSection from '../../components/landingPage/locationSection';
import { Grid } from '@mui/material';
import Footer from '../../components/landingPage/Footer';
import AddUser from '../../components/landingPage/addUser';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHome } from '../../redux/actions/action';
import NearByPlaces from '../../components/landingPage/nearbyplaces';
import DynamicAccordions from '../../components/landingPage/dynamicaAcordions';
import './landingPage.css'



export default function LandingPage() {

  const dispatch = useDispatch();

  const { home, /*loading, /*error*/ } = useSelector((state) => state.user);



  useEffect(() => {
    dispatch(fetchHome());

  }, [dispatch]);



  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const topOffset = 250; // height of your TopBar in px
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    } else {
      console.warn(`No section found for "${sectionId}"`);
    }
  };


  return (
    <Grid container columns={{ xs: 12, sm: 12, md: 12 }} className='landingpage-root' >
      <TopBar handleClick={scrollToSection} />
      <Banner src={home?.banner_img} />
      <AddUser />
      <ImageSlider images={home?.campus_amenities} ref={(el) => { sectionRefs.current['plans'] = el; }} />
      <AmenitiesIcons cards={home?.amenities} ref={(el) => (sectionRefs.current['amenities'] = el)} />
      <LocationSection data={home?.location[0]} ref={(el) => (sectionRefs.current['location'] = el)} />
      <NearByPlaces />
      <DynamicAccordions />
      <Footer ref={(el) => (sectionRefs.current['about'] = el)} />
    </Grid>
  )
}
