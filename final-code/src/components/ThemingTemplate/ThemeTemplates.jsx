import React from 'react'
import { FiSettings } from 'react-icons/fi'
import { BsMoonStars, BsFillSunFill } from 'react-icons/bs'
import { useGLobalContext } from '../../hooks/contextAPI'

import { BsXLg } from 'react-icons/bs'
import './themetemplate.scss'

const ThemeTemplate = React.memo(() => {
  const {
    isTemplateOpen,
    openTemplate,
    handleTheme,
    closeTemplate,
    changeTemp,
    handleTemp,
    colorTheme,
  } = useGLobalContext()


  return (
    <>
      <div className="theme-icon-wrapper" onClick={openTemplate}>
        <FiSettings className="theme-icon switch__color" />
      </div>
      <div
        className={`${
          isTemplateOpen
            ? 'theme-wrapper show-template'
            : 'theme-wrapper hide-template'
        }`}
      >
        <div className="theme-header">
          <span>Theme Template</span>
          <span>
            <BsXLg
              onClick={closeTemplate}
              className="close-template switch__color"
            />
          </span>
        </div>
        <div className="mode">
          <div
            className={`${colorTheme === 'light-mode' ? 'active-mode' : ''}`}
            onClick={() => handleTheme('light-mode')}
          >
            <BsFillSunFill className="icon switch__color" />
          </div>
          <div
            className={`${colorTheme === 'dark-mode' ? 'active-mode' : ''}`}
            onClick={() => handleTheme('dark-mode')}
          >
            <BsMoonStars className="icon switch__color " />
          </div>
        </div>
        <div className="template-wrapper">
          <div
            className={`template ${
              changeTemp === 'template-1' ? 'switch__border-color' : ''
            }`}
            onClick={() => handleTemp('template-1')}
          >
            <div className="template-1"></div>
          </div>
          <div
            className={`template ${
              changeTemp === 'template-2' ? 'switch__border-color' : ''
            }`}
            onClick={() => handleTemp('template-2')}
          >
            <div className="template-2"></div>
          </div>
          <div
            className={`template ${
              changeTemp === 'template-3' ? 'switch__border-color' : ''
            }`}
            onClick={() => handleTemp('template-3')}
          >
            <div className="template-3"></div>
          </div>
          <div
            className={`template ${
              changeTemp === 'template-4' ? 'switch__border-color' : ''
            }`}
            onClick={() => handleTemp('template-4')}
          >
            <div className="template-4"></div>
          </div>
          <div
            className={`template ${
              changeTemp === 'template-5' ? 'switch__border-color' : ''
            }`}
            onClick={() => handleTemp('template-5')}
          >
            <div className="template-5"></div>
          </div>
          <div
            className={`template ${
              changeTemp === 'template-6' ? 'switch__border-color' : ''
            }`}
            onClick={() => handleTemp('template-6')}
          >
            <div className="template-6"></div>
          </div>

          <div
            className={`template ${
              changeTemp === 'template-7' ? 'switch__border-color' : ''
            }`}
            onClick={() => handleTemp('template-7')}
          >
            <div className="template-7"></div>
          </div>
        </div>
      </div>
    </>
  )
})

export default ThemeTemplate
