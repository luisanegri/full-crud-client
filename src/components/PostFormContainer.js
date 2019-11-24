import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostForm from './PostForm';
import { createPost } from '../actions/post';

export class PostFormContainer extends Component {
  state = { title: '', message: '' };

  onSubmit = event => {
    event.preventDefault();
    this.props.createPost(this.state.title, this.state.message);
    this.setState({ title: '', message: '' });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <PostForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
        />
      </div>
    );
  }
}

const mapDispatchToProps = { createPost };

export default connect(null, mapDispatchToProps)(PostFormContainer);
