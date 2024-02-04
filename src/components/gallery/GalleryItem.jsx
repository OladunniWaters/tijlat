import './GalleryItem.scss';

export default function ProphecyCard( { prophecies }) {
  const { id, image, category } = prophecies 
  
  return (
    <div className="gallery_item_cont" id={id}>
        <img src={image} alt='gallery_images' className='gallery_image'/>
    </div>
  );
}