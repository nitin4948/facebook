import React, { Component } from "react";
import Post from "./Post";

class PostsList extends Component {
  render() {
    const { postsList } = this.props;
    return postsList.map((post, index) => <Post post={post} key={index} />);
  }
}

export default PostsList;
