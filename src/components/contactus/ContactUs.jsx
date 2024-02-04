import './ContactUs.scss';
import contactImage from '../../assets/blackpic_6.jpg';

import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";


function ContactUs() {

  return (
      <div className='contact'> 
           
           <div className='contact_cont'>      
                <div className='contact_image_cont'>
                   <img src={contactImage} alt='tijlat_contactus_image' className='contactus_image'/>
               </div> 
                
                
                <div className='contact_content_cont'>
                         <h1 className='contact_header'>GET IN TOUCH</h1>
                        <p className='contact_content_p'>
                           Have a question? Our team is always ready to help. Feel free reach us anytime, we'll be glad to have you in our atelier.
                        </p>
                        
                        <div className='contact_location_cont'>
                           <FaLocationDot className='contact_location_icon'/>
                           <p className='contact_location_p'>
                             19A, Alake Street, Opposite Abeokuta South Local Government Secretariat, Ake, Abeokuta, Ogun State
                           </p>
                        </div>
                        
                        <div className='contact_time_cont'>
                           <FaRegClock className='contact_time_icon'/>
                           <p className='contact_time_p'>Monday - Saturday: 9am-7pm</p>
                        </div>
                        
                        <div className='contact_icon_cont'>
                              <div className='contact_icon_item'>
                                  <BsFillTelephoneFill className='contact_icon'/>
                              </div>
                               <div className='contact_icon_item'>
                                   <HiOutlineMail className='contact_icon'/>
                              </div>
                               <div className='contact_icon_item'>
                                  <RiWhatsappFill className='contact_icon'/>
                              </div>
                               <div className='contact_icon_item'>
                                  <BsInstagram className='contact_icon'/>
                              </div>
                        </div>    
               </div>
               </div>
      </div>
  )
}

export default ContactUs