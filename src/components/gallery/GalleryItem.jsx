import './GalleryItem.scss';

export default function ProphecyCard( { prophecies }) {
  const { id, prophecy , pastor,  image} = prophecies 
  
  return (
    <div className="ProphecyCard" id={id}>
         <div className="pastorProphecy">
            {prophecy} 
         </div>
         
         <div className="span"></div>
         <div  className="CardInfo">
             <img src={image} alt={pastor} className="pastorImage"/>
             <p className="pastorName">{pastor}</p>
         </div>
    </div>
  );
}