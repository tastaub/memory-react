import React from 'react'
import "./Menu.css"



  const Nav = props => (
      <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper blue darken-2">
          <span className="brand-logo">{props.correct}</span>

          <ul className="right hide-on-med-and-down">
            <li className="score"><span>Score: {props.score}</span></li>
            <li className="score"><span>High Score: {props.highScore}</span></li>
          </ul>
        </div>
      </nav>
    </div>
  )

  export default Nav;
