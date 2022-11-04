import React from 'react';
import './gallery.css'
const Gallery = ({data}) => {
  return (
        <div className='gallery d-flex flex-wrap justify-content-around'>
           
            {
                data.map((image) =>
                <div key={image.id} >
                    <div style={{margin:20}}>
                        <img src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`} 
                            height="200" width="250" alt={image.title}/>
                    </div>
                </div>)
            }
            
        
        </div>
  );
}

export default Gallery;
