import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  state = {
    spost: null,
  };

  componentDidMount() {
    console.log(this.props);
    if (
      (!this.state.spost && this.props.match.params.id) ||
      (this.state.spost && this.state.spost.id !== this.props.match.params.id)
    ) {
      axios.get("/posts/" + this.props.match.params.id).then((response) => {
        this.setState({ spost: response.data });
      });
    }
  }

  deletePostHandler = () => {
    axios.delete("/posts/" + this.props.match.params.id).then((response) => {
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
