import React from 'react'
import Fade from 'react-reveal/Fade'
import { FaPlaystation, FaXbox, FaWindows } from 'react-icons/fa'
import './singlegame.scss'

const SingleGame = React.memo((props) => {
  const { games_count, image_background, language, name, slug } = props
  return (
    <>
      <Fade bottom>
        <div className="game-card">
          <img src={image_background} alt="" />
          <div className="game-description">
            <div
              className="game-header"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div className="game-icons-wrapper">
                <FaWindows className="game-icons" />
                <FaXbox className="game-icons" />
                <FaPlaystation className="game-icons" />
              </div>
              <div>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    // class="h-6 w-6"
                    fill="#fbca03"
                    viewBox="0 0 24 24"
                    stroke="none"
                    strokeWidth="1"
                    style={{ width: '15px' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <h2 className="switch__color">{name}</h2>
            <div>
              <span>{language}</span>
              <span>{games_count}</span>
              <p>{slug}</p>
            </div>
          </div>
        </div>
      </Fade>
    </>
  )
})

export default SingleGame
