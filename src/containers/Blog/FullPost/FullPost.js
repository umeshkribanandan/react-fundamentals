import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    spost: null,
  };

  componentDidUpdate() {
    if (
      (!this.state.spost && this.props.id) ||
      (this.state.spost && this.state.spost.id !== this.props.id)
    ) {
      axios.get("/posts/" + this.props.id).then((response) => {
        this.setState({ spost: response.data });
      });
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.id).then((response) => {
      console.log(response.data);
    });
  };

  render() {
    let post = <p>Please select a Post!</p>;
    if (this.props.id !== null && this.state.spost === null) {
      post = <p>Loding....</p>;
    }
    if (this.state.spost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.spost.title}</h1>
          <p>{this.state.spost.body}</p>
          <div className="Edit">
            <button onClick={this.deletePostHandler} className="Delete">
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

export default FullPost;
