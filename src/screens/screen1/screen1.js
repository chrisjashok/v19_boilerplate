import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/actions/action';

function Screen1() {

  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser());
    console.log("user data", user);
  }, [dispatch]);



  return (
    <div>screen1</div>
  )
}


export default Screen1;