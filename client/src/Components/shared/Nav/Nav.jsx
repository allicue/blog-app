import React from 'react'
import './Nav.css'


import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const BlogAppLogo = styled.img`
max-width: 50px;
`

const UserLogo = styled.img`
max-width: 50px;
`

function Nav() {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/"><BlogAppLogo src="https://www.flaticon.com/premium-icon/icons/svg/2015/2015363.svg" alt="BlogApp logo"/>Blog App</NavLink>
        <div className="links">
          <NavLink className="link" to="/CreatePost">Add Post</NavLink>
          <NavLink className="link" to="/CreateUser"><UserLogo src="https://www.flaticon.com/premium-icon/icons/svg/1144/1144709.svg" alt="user logo" />Sign Up</NavLink>
        </div>
        <input type="checkbox" id="check" />
      <label for="check" class="checkbtn">
        <i class="fa fa-bars"></i>
      </label>
      </div>
    </nav>

  )
}

export default Nav
