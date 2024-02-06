import './ContactUs.scss';
import contactImage from '../../assets/blackpic_6.jpg';

import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";


import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function ContactUs() {

      useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
      <div className='contact'> 
           
           <div className='contact_cont'>      
                <div  className='contact_image_cont'>
                   <img src={contactImage} alt='tijlat_contactus_image' className='contactus_image'/>
               </div> 
                
                
                <div  className='contact_content_cont'>
                         <h1 className='contact_header'>GET IN TOUCH</h1>
                        <p className='contact_content_p'>
                           Have a question? Our team is always ready to help. Feel free reach us anytime, we'll be glad to have you in our atelier.
                        </p>
                        
                        <div className='contact_location_cont'>
                           <FaLocationDot className='contact_location_icon'/>
                           <p className='contact_location_p'>
                             NO 1. Tanke Oke-Odo Beside Becadims Hotel Oko-Oba Street, Ilorin, Kwara State.
                           </p>
                        </div>
                        
                        <div className='contact_time_cont'>
                           <FaRegClock className='contact_time_icon'/>
                           <p className='contact_time_p'>Monday - Saturday: 9am-7pm</p>
                        </div>
                        
                        <div className='contact_icon_cont'>
                              <a href='tel:07032636210' className='contact_icon_item'>
                                  <BsFillTelephoneFill className='contact_icon'/>
                              </a>
                               <a href='mailto:tijlatdesign@gmail.com' className='contact_icon_item'>
                                   <HiOutlineMail className='contact_icon'/>
                              </a>
                               <a href='https://wa.link/1gk4cs' target='_blank' className='contact_icon_item'>
                                  <RiWhatsappFill className='contact_icon'/>
                              </a>
                               <a href='https://www.instagram.com/tijlatdesign?igsh=MzRlODBiNWFlZA==' target='_blank' className='contact_icon_item'>
                                  <BsInstagram className='contact_icon'/>
                              </a>
                        </div>    
               </div>
               </div>
      </div>
  )
}

export default ContactUs