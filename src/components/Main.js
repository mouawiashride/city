import React, { useEffect } from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from '../Pages/Home/Home';
import ContactUs from './ContactUs/ContactUs';

import Footer from './Footer/Footer';
import Header from './Header/Header';
import Signin from './Signin/Signin';

import OurBuilds from './ourbuilds/OurBuilds';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Signup from './Signup/Signup';
import { fetchData } from '../redux-tool/reducers/signin';

export default function Main() {


  const dispatch = useDispatch();
  const data = useSelector((state=>state.Sign))
  

  useEffect( ()=>{
    if(data.token)
    dispatch(fetchData(data.token))
  }  , [data.token])


  return (
<>
  <BrowserRouter>
  <Header data={data}  />
    <Routes>
      <Route index  path="/" element={<Home />} />
      <Route path="/Signin" element={<Signin  />} />
      <Route path="/Signup" element={<Signup     />} />
       <Route path="/goto" element={<OurBuilds/>} />
       <Route path="/contactus" element={<ContactUs/>} />
    </Routes>
  <Footer/>
  </BrowserRouter>
</>
  )
}
