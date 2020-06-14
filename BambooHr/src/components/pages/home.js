import React from "react";

import bambooBackGround from '../../../static/assets/images/bambooBG.jpg';

export default function() {
  return (
    <div className='home-container'>
        <div className='home-img'
            style={{
            backgroundImage: `url(${bambooBackGround})`
        }} />
    </div>
  );
}