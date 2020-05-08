import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/AsyncComponent";

// import NewPost from "./NewPost/NewPost";

const FullPost = React.lazy(() => import("./FullPost/FullPost"));
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost");
});

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="myactive">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-submit=true",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1> home</h1>} /> */}

        <Switch>
          <Route path="/" exact component={Posts} />
          <Route path="/new-post" exact component={AsyncNewPost} />
          <Route
            path="/post/:id"
            exact
            render={(props) => {
              return (
                <Suspense fallback={<div>Fallback Loading ......</div>}>
                  <FullPost {...props} />
                </Suspense>
              );
            }}
          />
          <Redirect from="/posts" to="/" />
          <Route component={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
