import './AboutUs.scss';
import aboutImage from '../../assets/blackpic_5.jpg'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function AboutUs() {
  
      useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
      <div className='about_content_cont'>
         <div  data-aos="fade-left" data-aos-offset="400" data-aos-duration="1500" >
             <img src={aboutImage} alt='tijlat_aboutus_image' className='aboutus_image'/>
         </div>
         
         <div  data-aos="fade-right" data-aos-offset="400" data-aos-duration="1500">
             <h1 className='about_content_header'>ABOUT US</h1>
             <p className='about_content_paragraph'> 
                 Based in Kwara, Nigeria, Tijlat Design stands as a pinnacle of bespoke craftsmanship with an unwavering dedication to excellence. Our firm conviction is rooted in the belief that nothing surpasses the allure of tailor-made apparel, and our mission is to make this accessible to everyone.
                 <br />
    
    Catering to a diverse clientele, we specialize in creating custom outfits that transcend gender boundaries. Whether it's suits, corporate attire, or native wears, we are committed to ensuring that individuals exude confidence by selecting designs and styles that perfectly complement their unique identity. Our commitment extends to understanding and meeting the distinct requirements of every client who chooses to engage with us.
             </p>
      </div>       
      </div>
  )
}

export default AboutUs