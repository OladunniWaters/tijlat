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
         <h1  className='brand_logo'>
            TIJLAT 
         </h1>
      </nav>
  )
}

export default Navbar