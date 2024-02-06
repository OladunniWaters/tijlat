import './Navbar.scss';

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  
        useEffect(() => {
    AOS.init();
   AOS.refresh();
  });

  return (
      <nav className='nav'>
         <h1 data-aos="fade-right" data-aos-offset="400" data-aos-duration="1000" className='brand_logo'>
            TIJLAT 
         </h1>
      </nav>
  )
}

export default Navbar