import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostsList from './PostsList';
import { readPosts, deletePost } from '../actions/post';

export class PostsListContainer extends Component {
  componentDidMount() {
    this.props.readPosts();
  }

  render() {
    return (
      <div>
        <PostsList
          posts={this.props.posts}
          deletePost={this.props.deletePost}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = { readPosts, deletePost };

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);
