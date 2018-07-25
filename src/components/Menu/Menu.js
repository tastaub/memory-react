import React from 'react'
import { Menu } from 'semantic-ui-react'

// export default class MenuExampleHeader extends Component {
//   state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
  const Nav = props => (
      // <Menu color='red'>
      //   <Menu.Item header>Score: {props.score}</Menu.Item>
      //   <Menu.Item>High Score: {props.highScore}</Menu.Item>
      // </Menu>
      <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <span className="brand-logo">{props.correct}</span>

          <ul className="right hide-on-med-and-down">
            <li><span>Score: {props.score}</span></li>
            <li><span>High Score: {props.highScore}</span></li>
          </ul>
        </div>
      </nav>
    </div>
  )

  export default Nav;
//     )
//   }
// }