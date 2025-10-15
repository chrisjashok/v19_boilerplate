import { useState } from 'react'
import "./home.css"
import Grid from '@mui/material/Grid'
import Topbar from '../../components/home/Topbar';
import Herosection from '../../components/home/Herosection';
import HorizontalSlider from '../../components/home/HorizontalSlider';
import Banner from '../../components/home/Banner';
import Buttonoption from '../../components/home/Buttonoption';
import Footer from '../../components/home/Footer';
import AddUser from '../../components/home/AddUser';
import { Button } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useLocation } from 'react-router-dom';

function Home(props) {
  const data = useLocation()
  console.log('home',data.state)
  const [open, setOpen] = useState(true);

  // const dispatch = useDispatch();
  // const { user, /*loading, /*error*/ } = useSelector((state) => state.user);
  // useEffect(() => {
  //   dispatch(fetchUser());

  // }, [dispatch]);

  // useEffect(() => {
  //   console.log(user)
  // }, [user])

  return (

    <Grid container spacing={2} className="root" >
      <Grid className="item">
        <Topbar />
        <Herosection />
        <HorizontalSlider lable="Featured neighborhoods" handleClick={(e)=>console.log('e',e.target.value)} />
        <Banner />
        <HorizontalSlider lable="Featured Properties" />
        <Buttonoption />
        <Footer />
      </Grid>
      {!open &&

        <Button className='floating-btn' onClick={() => setOpen(!open)} endIcon={<KeyboardDoubleArrowUpIcon />} > click here</Button>

      }

      <AddUser open={open} handleClose={() => setOpen(!open)} />
    </Grid>
  )
}


export default Home;