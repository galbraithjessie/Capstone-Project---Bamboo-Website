import React from "react";
import YouTube from '@u-wave/react-youtube';

export default function() {
  return (
    <div className='home-container'>
      <div className='home-title'>Our Software</div>
      <YouTube className='home-video'
        video="7WraxuTDqk0"
        autoplay
        height='460'
        width='840'
      />

      <div className='home-form'>
        <button className='btn'>Get A Free Quote</button>
      </div>
    </div>
  );
}