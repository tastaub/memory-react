import React, { Component } from "react";

import Xmen from "./components/Xmen";
import Wrapper from "./components/Wrapper";
import Container from "./components/Cotainer";
import Menu from "./components/Menu"
import Title from "./components/Title"
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
      <Title />
      <Menu />
      <Wrapper>
        {this.state.friends.map(friend => (
            <Xmen
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
        ))}
      </Wrapper>
      </Container>
    );
  }
}

export default App;
