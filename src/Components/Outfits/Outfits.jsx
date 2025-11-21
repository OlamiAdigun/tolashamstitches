import React from 'react';
import './Outfits.css'
import outfit_1 from '../../assets/outfit-1.jpg'
import outfit_2 from '../../assets/outfit-2.jpg'
import outfit_3 from '../../assets/outfit-3.jpg'

const Outfits = () => {
  return (
    <div className='outfits' id='outfits'>
      <div className='outfit'>
        <img src={outfit_1} alt="" />
        <div className="caption">
          {/* <img src="" alt="" /> */}
          <p>Best Fit</p>
        </div>
      </div>

      <div className='outfit'>
        <img src={outfit_2} alt="" />
        <div className="caption">
          {/* <img src="" alt="" /> */}
          <p>Elegant Stitch</p>
        </div>
      </div>
      
      <div className='outfit'>
        <img src={outfit_3} alt="" />
        <div className="caption">
          {/* <img src="" alt="" /> */}
          <p>Fashion Edge</p>
        </div>
      </div>
      
    </div>
  );
}

export default Outfits;
