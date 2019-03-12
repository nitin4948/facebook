import React, { Component } from "react";
import "./AddPost.css";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        url: "",
        title: ""
      }
    };
  }

  handleChange = event => {
    const eve = { ...event };
    this.setState(prevState => ({
      post: {
        ...prevState.post,
        [eve.target.name]: eve.target.value
      }
    }));
  };

  handleNewPost = event => {
    event.preventDefault();
    if (this.state.post.url === "") {
      window.alert("Please enter Post URL");
    } else if (this.state.post.title === "") {
      window.alert("Please enter Post Title");
    } else {
      const post = { ...this.state.post };
      this.setState(
        {
          post: {
            url: "",
            title: ""
          }
        },
        () => this.props.onNewPost(post)
      );
    }
  };

  render() {
    return (
      <div className="add-post">
        <h1 className="add-post-title"> Add Post</h1>
        <form className="add-post-form">
          <div className="input-groups-container">
            <div className="input-group">
              <label>Enter URL</label>
              <input
                autoFocus
                name="url"
                type="text"
                value={this.state.post.url}
                onChange={this.handleChange}
              />
            </div>
            <div className="input-group">
              <label>Enter Title</label>
              <input
                name="title"
                type="text"
                value={this.state.post.title}
                onChange={this.handleChange}
              />
            </div>
            <div className="button-container">
              <button className="button" onClick={this.handleNewPost}>
                New Post
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddPost;
