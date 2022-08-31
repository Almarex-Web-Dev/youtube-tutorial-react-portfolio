import React from 'react'
import './logo.scss'
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin'
import gsap from 'gsap'

const Logo = () => {
  const bgRef = React.useRef()
  const outLineRef = React.useRef()
  const outLineRef2 = React.useRef()
  const solidLogoRef = React.useRef()

  React.useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)
    setTimeout(() => {
      gsap
        .timeline()
        .to(bgRef.current, {
          duration: 1,
          opacity: 1,
        })
        .from(outLineRef.current, {
          drawSVG: 0,
          duration: 4,
        })
        .from(outLineRef2.current, {
          drawSVG: 0,
          duration: 4,
        })
      gsap.fromTo(
        solidLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 0.065,
          delay: 4,
          duration: 10,
        },
      )
    }, 4000)
  }, [])

  return (
    <div className="logo-container switch__stroke-color" ref={bgRef}>
      <svg
        ref={solidLogoRef}
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo solid-logo"
        viewBox="0 0 171 210"
      >
        <path
          className="fill__color home-logo"
          d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z"
        />
        <path
          d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
          fill="#797878"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="home-logo"
        viewBox="0 0 171 210"
      >
        <path
          ref={outLineRef}
          className="solid-logo"
          d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z"
        />
        <path
          className="solid-logo"
          d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
          ref={outLineRef2}
        />
      </svg>
    </div>
  )
}

export default Logo
