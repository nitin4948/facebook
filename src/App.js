import React, { Component } from "react";
import PostsList from "./components/PostsList";
import AddPost from "./components/AddPost";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsList: []
    };
  }

  handleNewPost = post => {
    let list = [...this.state.postsList];
    list.push(post);
    this.setState({
      postsList: list
    });
  };

  render() {
    return (
      <div className="main-container">
        <AddPost onNewPost={this.handleNewPost} />
        {this.state.postsList.length > 0 && (
          <div>
            <h1 className="main-title">Your Posts</h1>
            <PostsList postsList={this.state.postsList} />
          </div>
        )}
        {this.state.postsList.length === 0 && (
          <div className="no-posts">
            <p>No posts has been added yet.</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
