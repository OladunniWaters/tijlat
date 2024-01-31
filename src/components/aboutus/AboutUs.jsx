import './AboutUs.scss';
import aboutImage from '../../assets/tijlat_hero_image.jpg'

function AboutUs() {

  return (
      <div className='about_content_cont'>
         <div>
             <img src={aboutImage} alt='tijlat_aboutus_image' className='aboutus_image'/>
         </div>
         
         <div>
             <h1 className='about_content_header'>About Us</h1>
             <p className='about_content_paragraph'> 
                 Based in Kwara, Nigeria, Tijlat Design stands as a pinnacle of bespoke craftsmanship with an unwavering dedication to excellence. Our firm conviction is rooted in the belief that nothing surpasses the allure of tailor-made apparel, and our mission is to make this accessible to everyone.
    
    Catering to a diverse clientele, we specialize in creating custom outfits that transcend gender boundaries. Whether it's suits, corporate attire, or native wears, we are committed to ensuring that individuals exude confidence by selecting designs and styles that perfectly complement their unique identity. Our commitment extends to understanding and meeting the distinct requirements of every client who chooses to engage with us.
    
    Embark on a sartorial journey with Tijlat Design, where clients can curate their desired fabrics, colors, and styles. Each garment is meticulously hand-stitched, accompanied by an unwavering focus on delivering an elevated customer experience, leading to unparalleled satisfaction. Our commitment to affordability does not compromise on quality, as our durable materials attest. With a diverse array of style options, clients can effortlessly choose their preferences or specify personalized modifications.
    
    For inquiries, we eagerly await your questions over the phone or via Whatsapp. Partner with us, and let Tijlat Design be your gateway to high-quality, unisex clothing, fostering self-confidence and ensuring you always look your very best.
             </p>
      </div>       
      </div>
  )
}

export default AboutUs