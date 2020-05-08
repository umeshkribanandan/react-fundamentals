import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPost: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "umesh",
          };
        });
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  selectedPostHandler = (id) => {
    this.setState({ selectedPost: id });
  };

  render() {
    let posts = <p> Something went wrong!!!!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((p) => {
        return (
          <Post
            title={p.title}
            key={p.id}
            author={p.author}
            click={() => {
              this.selectedPostHandler(p.id);
            }}
          />
        );
      });
    }
    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;