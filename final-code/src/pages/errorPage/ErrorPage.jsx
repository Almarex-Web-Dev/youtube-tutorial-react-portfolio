import React from 'react'
import { Link } from 'react-router-dom'
import feelingblue from '../../assets/images/undraw_feeling_blue_-4-b7q.svg'
import Fade from 'react-reveal/Fade'

import './errorpage.scss'

const ErrorPage = () => {
  return (
    <div className="section__errorpage section__padding">
      <div className="section__errorpage-content">
        <Fade bottom>
          <h2>Oops Page Not fount</h2>
        </Fade>
        <Fade left>
          <div className="error404">
            <h2> 404</h2>
          </div>
        </Fade>
        <Fade bottom>
          <Link to="/" className="contact-button">
            <div>
              <span className="bg switch__bg"></span>
              <span className="base switch__border-color"></span>
              <span className="text">Back Home</span>
            </div>
          </Link>
        </Fade>
      </div>
      <Fade right>
        <img className="errorPageSvg" src={feelingblue} alt="feeling bule" />
      </Fade>
    </div>
  )
}

export default ErrorPage
