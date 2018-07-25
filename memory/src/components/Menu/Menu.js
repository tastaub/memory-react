import React from 'react'
import { Menu } from 'semantic-ui-react'

// export default class MenuExampleHeader extends Component {
//   state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
  const Nav = props => (
      <Menu color='red'>
        <Menu.Item header>Score: {props.score}</Menu.Item>
        <Menu.Item>High Score: {props.highScore}</Menu.Item>
      </Menu>
  )

  export default Nav;
//     )
//   }
// }