import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../../../api/posts.js';
import Post from './Post.jsx';
import create from './start.css';
 
class Start extends Component {
  renderPosts() {
    return this.props.posts.map((post) => (
      <Post 
        key={post._id}
        post={post} />
    ));
  }

  render() {
    return (
      <div>
        <h1 className="h1">Предложения</h1>
        <div className="container">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find({}).fetch(),
  };
})(Start);
