/* eslint-disable no-unused-vars */
import React from 'react'
import Arrow from './arrow.png'

export default function Home(props) {
  return (
    <div className='home-div'>
      <div className="home-left">
        <h3>
          Effortlessly coordinate your online presence, sync posts across platforms, 
          and engage your audience like never before. Simplify your strategy, 
          amplify your reach, and take control of your digital journey with <span>Media Sync</span>
        </h3>
        <button onClick={props.handleCover}>Get Started <img src={Arrow} /> </button>
      </div>

      <div className="home-right"></div>

    </div>
  )
}
