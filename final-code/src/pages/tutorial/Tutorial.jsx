import React from 'react'
import Fade from 'react-reveal/Fade'
import './tutorial.scss'
import svgUnderConst from '../../assets/images/undraw_under_construction_-46-pa.svg'

const Tutorial = () => {
  return (
    <section className="section__tutorial section__padding">
      <div className="section__tutorial-wrapper">
        <Fade bottom>
          <img src={svgUnderConst} alt="under construction" />
          <div className="section__tutorial-heading">
            <h2>Page is under contruction</h2>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default Tutorial
