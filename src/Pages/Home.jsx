import React, { useContext, useEffect } from 'react';
import { getData } from '../Context/DataContext';
import Carousel from '../Components/Carousel';
import MidBanner from '../Components/MidBanner';
import  Features  from '../Components/Features';

const Home = () => {
  return (
    <>
      <Carousel />
      <MidBanner />
      <Features />
    </>
  );
};

export default Home;
