import './Hero.scss';

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Hero() {
  
        useEffect(() => {
    AOS.init();
    AOS.refresh();
  });


  return (
     <div className='hero_section'>
          <div className='hero_agbada'></div>    
            <div className='hero_content_cont'>
               <h1 data-aos="fade-left" data-aos-offset="400" data-aos-duration="1500" className='hero_content_header'>
                  Elevate Your Style Where Expertise Meets Elegance
               </h1>
               <p  data-aos="fade-right" data-aos-offset="400" data-aos-duration="2000" className='hero_content_paragraph'>
         Explore a world where craftsmanship meets creativity, and let me guide you on a journey to discover a wardrobe that not only reflects your style but sets you apart. Elevate your fashion experience – because exceptional style deserves an extraordinary touch.
               </p>
               <div className='hero_content_button_cont'>
                   <a  data-aos="fade-left" data-aos-offset="400" data-aos-duration="2500" href='https://wa.link/1gk4cs' target='_blank' className='contact_whatsapp_link'>Contact Us</a>
               </div>
            </div>
     </div>
  )
}

export default Hero