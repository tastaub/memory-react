import React, { Component } from "react";


import Wrapper from "./components/Wrapper";
import Container from "./components/Cotainer";
import Menu from "./components/Menu"
import Title from "./components/Title"
import friends from "./friends.json";
import "./App.css";

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}



class App extends Component {
  // Setting this.state.friends to the friends json array
  constructor(props) {
    super(props)
    this.state = {
      friends: friends,
      score: 0,
      highScore: 0,
      clicked: []
    }

    // this.shuffleFriends = this.shuffleFriends.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  checkScore = (score) => {
    if(score > this.state.highScore)  {
      return score
    } else  {
      return this.state.highScore
    }
  }

  handleClick = (id) => {
    let score = this.state.score
    let newFriends =shuffle(friends)
    if(this.state.clicked.indexOf(id) === -1) {
      let clicked = this.state.clicked.concat(id)
      this.setState({
        friends: newFriends,
        score: score += 1,
        clicked: clicked,
        highScore: this.checkScore(score)
      })
      console.log(this.state)
    } else  {
      alert("You lose")
      this.setState({
        friends: newFriends,
        score: 0,
        clicked: [],
        highScore: this.checkScore(score)
      })
      console.log(this.state)
    }
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <Menu score={this.state.score} highScore={this.state.highScore} />
      <Container>
        <Title />
        <Wrapper 
          data={friends}
          onClick={this.handleClick}
        />
      </Container>
      </div>
    );
  }
}

export default App;
