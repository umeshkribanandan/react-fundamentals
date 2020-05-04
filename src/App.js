import React, { Component } from "react";
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";

import "./App.css";

class App extends Component {
  state = {
    username: "umesh",
  };

  usernameHandler(event) {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          change={this.usernameHandler.bind(this)}
          username={this.state.username}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
