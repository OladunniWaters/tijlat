import './Hero.scss';
import heroImage from '../../assets/tijlat_hero_image.jpg'

function Hero() {

  return (
     <div className='hero_section'>
        <div className='hero_content_cont'>
           <h1 className='hero_content_header'>
              Elevate Your Style: Where Expertise Meets Elegance
           </h1>
           <p className='hero_content_paragraph'>
               Welcome to the epitome of fashion innovation and timeless elegance. As a seasoned professional fashion designer, I bring a wealth of expertise to redefine your wardrobe. With a keen eye for detail and a passion for creating bespoke pieces, I seamlessly blend contemporary trends with classic sophistication. Explore a world where craftsmanship meets creativity, and let me guide you on a journey to discover a wardrobe that not only reflects your style but sets you apart. Elevate your fashion experience – because exceptional style deserves an extraordinary touch.
           </p>
           <div className='hero_content_button_cont'>
              <a href='£contact us'>Contact Us</a>
           </div>
        </div>
        
        <div className='hero_image_cont'>
           <img src={heroImage} alt='tijlat_hero_image' className='hero_image'/>
        </div>
     </div>
  )
}

export default Hero