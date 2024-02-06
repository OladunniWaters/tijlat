import './GalleryItem.scss';

import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ProphecyCard( { prophecies }) {
  const { id, image, category } = prophecies 
  
          useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  
  return (
    <div  className="gallery_item_cont" id={id}>
        <img src={image} alt='gallery_images' className='gallery_image'/>
    </div>
  );
}