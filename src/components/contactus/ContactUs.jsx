import './ContactUs.scss';
import contactImage from '../../assets/tijlat_hero_image.jpg';

import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";


function ContactUs() {

  return (
      <div> 
            <h1 className='contact'>Contact Us</h1>
            
            <div>
               <img src={contactImage} alt='tijlat_contactus_image' className='contactus_image'/>
           </div> 
            
            
            <div>
                 <div>
                    <p>
                       Have a question? Our team is always ready to help. Feel free reach us anytime, we'll be glad to have you in our atelier.
                    </p>
                    <div>
                       <FaLocationDot />
                       <p>
                         19A, Alake Street, Opposite Abeokuta South Local Government Secretariat, Ake, Abeokuta, Ogun State
                       </p>
                    </div>
                    <div>
                       <FaRegClock />
                       <p>Monday - Saturday: 9am-7pm</p>
                    </div>
                    <div>
                       <BsFillTelephoneFill />
                       <p>0706 060 8035</p>
                    </div>
                    <div>
                        <HiOutlineMail />
                       <p>grandeurtailors@gmail.com</p>
                    </div>
                 </div>
                 
                 <div>
                     <div>
                        <RiWhatsappFill />
                       <p>Contact us via whatsapp</p>
                    </div>
                    
                     <div>
                        <BsInstagram />
                       <p>Follow Us on instagram</p>
                    </div>
                 </div>
           </div>
           
      </div>
  )
}

export default ContactUs