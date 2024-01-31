import './Gallery.scss';
import GalleryItem from "./GalleryItem";
import Data from "./data";



function Gallery() {

  return (
       <div className="AprProphecy">
         <div>
            <h1 className="AprHeader">APRIL PROPHECIES</h1>
         </div>
         
         <div className="cards">
               {Data.map((prophecies)=>{
                 return (
                  <GalleryItem
                     prophecies={prophecies}
                  />
               );})}
          </div>
    </div>
  )
}

export default Gallery