import React, { useReducer } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu, socialIcons } from '../../data/data'

import { BsXLg, BsListNested } from 'react-icons/bs'
import { reducer } from '../../hooks/useReducer'
import './sidebar.scss'

const defaultOptions = {
  showAside1: false,
  openCloseNav1: false,
}

const Sidebar = React.memo(() => {
  // dispatch reducer functionality
  const [state, dispatch] = useReducer(reducer, defaultOptions)
  return (
    <>
      <BsListNested
        onClick={() => dispatch({ type: 'OPEN_NAVBAR' })}
        className="menu-icon switch__color"
      />
      <aside
        className={`${state.openCloseNav1 ? 'aside open-sidebar' : 'aside'} ${
          state.showAside1 ? 'aside show-asideBar' : 'aside'
        }`}
      >
        <div className="aside-wrapper">
          <BsXLg
            onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
            className="close-btn switch__color"
          />
          <Link
            className="logo-section"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              lineHeight: '4',
            }}
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 171 210"
              className="sidebar__logo"
            >
              <path
                className="fill__color"
                d="M171 209.194C159.166 128.482 123.848 68.1928 79.4896 55.1237C39.9765 68.9721 10.4845 132.104 0 210C24.4381 165.9 53.1053 124.32 80.4167 105.975C115.428 124.605 139.927 163.164 171 209.194L171 209.194Z"
              />
              <path
                d="M12.2177 101.884C32.1592 73.1578 55.5534 46.0733 77.8409 34.1237C106.411 46.259 126.403 71.3757 151.759 101.358C142.102 48.7847 113.282 9.51343 77.0849 1C44.8404 10.0195 20.7735 51.1438 12.2177 101.883V101.884Z"
                fill="white"
              />
            </svg>
            <span className="switch__color" style={{ fontSize: '1.2rem' }}>
              Abdullahi
            </span>
          </Link>
          <ul className="side-link">
            {sideBarMenu.map((link, index) => {
              const { text, icon, url } = link
              return (
                <li key={index}>
                  <NavLink
                    onClick={() => dispatch({ type: 'CLOSE_NAVBAR' })}
                    className={({ isActive }) => {
                      return isActive ? 'nav__links active-links' : 'nav__links'
                    }}
                    to={url}
                  >
                    {icon}
                    {text}
                  </NavLink>
                </li>
              )
            })}
          </ul>
          <div className="social-icon">
            {socialIcons.map((icons, index) => {
              const { icon, url } = icons
              return (
                <a href={url} key={index}>
                  {icon}
                </a>
              )
            })}
          </div>
        </div>
      </aside>
    </>
  )
})

export default Sidebar
