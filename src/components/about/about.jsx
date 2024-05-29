import React from 'react'
import "./about.css"
import About_png from "../../assets/about.png"
import play_icon from "../../assets/play-icon.png"

function about({ setPlayState }) {
  return (
    <div className="about">
      <div className="about-left">

        <img src={About_png} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play_icon' onClick={() => {
          setPlayState(true)
        }} />
 
      </div>
      <div className="about-right">
        <h3>About US</h3>
        <h2>Sir Shakir Hussain Deswali </h2>
        <h3>DESWALI LIBRARY</h3>
        <p>Empowering minds, transforming futures - our mission is to bring the gift of free education to all, unlocking the potential of every individual regardless of background or circumstance. Together, let's build a world where knowledge knows no bounds and opportunity is limitless</p>
        <p>Join us in our crusade for knowledge, where barriers to education crumble, and every eager mind finds its place in the sun. Together, let's ignite the flames of learning, illuminating paths to a brighter, more inclusive tomorrow.</p>
        


      </div>
    </div>
  )
}

export default about