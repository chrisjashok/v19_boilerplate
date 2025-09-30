import React, { useEffect, useRef } from 'react'
import Banner from '../../components/landingPage/banner'
import TopBar from '../../components/landingPage/TopBar'
import ImageSlider from '../../components/landingPage/imageSlider'
import AmenitiesIcons from '../../components/landingPage/amenitiesIcons';
// import logo1 from '../../assets/Icon/atm.svg'

import { ReactComponent as Atm } from '../../assets/Icon/atm.svg';
import { ReactComponent as Lift } from '../../assets/Icon/automatic-lifts.svg';
import { ReactComponent as Cctv } from '../../assets/Icon/cctv.svg';
import { ReactComponent as Ev } from '../../assets/Icon/ev-charging.svg';
import { ReactComponent as Fire } from '../../assets/Icon/fire-hydrant.svg';
import { ReactComponent as Rfid } from '../../assets/Icon/rfid-boom.svg';
import { ReactComponent as Water } from '../../assets/Icon/ev-charging.svg';

import Gym from '../../assets/images/Gym.png'
import BanquetHall from '../../assets/images/BanquetHall.png'
import IndoorCourt from '../../assets/images/IndoorCourt.png'
import PrivateTheater from '../../assets/images/PrivateTheater.png'
import YogaDeck from '../../assets/images/YogaDeck.png'
import LocationSection from '../../components/landingPage/locationSection';
import { Grid } from '@mui/material';
import Footer from '../../components/landingPage/Footer';
import AddUser from '../../components/landingPage/addUser';
import { useDispatch, useSelector } from 'react-redux';
import { fetchHome } from '../../redux/actions/action';



export default function LandingPage() {

  const dispatch = useDispatch();

  const { home, /*loading, /*error*/ } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchHome());

  }, [dispatch]);


  useEffect(() => {
    console.log('home',home?.campus_amenities)
  }, [home])

  const Bannerimg = [
    { img: BanquetHall, label: 'BanquetHall' },
    { img: IndoorCourt, label: 'IndoorCourt' },
    { img: PrivateTheater, label: 'Gym' },
    { img: YogaDeck, label: 'YogaDeck' },
    { img: Gym, label: 'Gym' },

    // ...
  ];



  const Amenities = [
    { Icon: Atm, label: '24/7 ATM' },
    { Icon: Lift, label: 'Automatic Lift' },
    { Icon: Cctv, label: 'CCTV surveillance' },
    { Icon: Ev, label: 'EV- charger' },
    { Icon: Fire, label: 'Fire protection' },
    { Icon: Rfid, label: 'RFID-TailGate' },
    // Add more...
  ]



  const sectionRefs = useRef({});

  const scrollToSection = (sectionId) => {
    const section = sectionRefs.current[sectionId];
    if (section) {
      const topOffset = 200; // height of your TopBar in px
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
    <Grid container sx={{ display: 'flex', justifyContent: 'center' }} >
      <TopBar handleClick={scrollToSection} />
      <Banner />
      <AddUser />
      {/* <ImageSlider images={Bannerimg} ref={(el) => { sectionRefs.current['plans'] = el; }} /> */}
      <ImageSlider images={home?.campus_amenities} ref={(el) => { sectionRefs.current['plans'] = el; }} />
      {/* <AmenitiesIcons cards={Amenities} ref={(el) => (sectionRefs.current['amenities'] = el)} /> */}
      <AmenitiesIcons cards={home?.amenities} ref={(el) => (sectionRefs.current['amenities'] = el)} />
      <LocationSection ref={(el) => (sectionRefs.current['location'] = el)} />
      <Footer ref={(el) => (sectionRefs.current['about'] = el)} />
    </Grid>
  )
}
