import React, { Component } from "react";
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";
import Validation from "./Validation";
import Char from "./Char";

import "./App.css";

class App extends Component {
  state = {
    username: "umesh",
  };

  usernameHandler(event) {
    this.setState({ username: event.target.value });
  }

  removeHandler = (charIndex) => {
    console.log(charIndex);
    let newUsername = [...this.state.username];

    console.log(newUsername.splice(charIndex, 1));

    this.setState({ username: newUsername.join("") });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          change={this.usernameHandler.bind(this)}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
        {this.state.username.length && (
          <p>{this.state.username.length} Characters</p>
        )}
        <Validation size={this.state.username.length} />

        {this.state.username.split("").map((c, index) => {
          return (
            <Char
              char={c}
              key={index}
              click={this.removeHandler.bind(this, index)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
