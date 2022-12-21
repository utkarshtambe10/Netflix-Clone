import React from 'react';
import "../homescreen/HomeScreen.css"
import NavBar from '../navbar/NavBar';
import Banner from '../banner/Banner';

function HomeScreen() {
  return <div className='homeScreen'>
    <NavBar /> 

    <Banner />
    
    {/* Row */}
  
  </div>
}

export default HomeScreen;