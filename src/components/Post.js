import React, { Component } from "react";
import "./Post.css";

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <div className="post">
        <h2 className="post-title">{post.title}</h2>
        <img className="post-img" src={post.url} alt={post.title} />
      </div>
    );
  }
}

export default Post;
