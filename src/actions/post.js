import request from 'superagent';
export const CREATE_POST = 'CREATE_POST';
export const READ_POSTS = 'READ_POSTS';
export const DELETE_POST = 'DELETE_POST';

const baseUrl = 'http://localhost:4000';

function createPostSuccess(post) {
  return {
    type: CREATE_POST,
    payload: post
  };
}

export const createPost = (message, title) => dispatch => {
  //   console.log("dispatch test");
  request
    .post(`${baseUrl}/post`)
    .send({ message, title })
    .then(response => {
      //   console.log(response.text);
      const action = createPostSuccess(response.text);
      dispatch(action);
    })
    .catch(console.error);
};

function readPostsSuccess(posts) {
  return {
    type: READ_POSTS,
    payload: posts
  };
}

export const readPosts = () => dispatch => {
  //   console.log("dispatch test");
  request
    .get(`${baseUrl}/post`)
    .then(response => {
      //   console.log(response.text);
      const action = readPostsSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function deletePostSuccess(id) {
  return {
    type: DELETE_POST,
    payload: id
  };
}

export const deletePost = id => dispatch => {
  //   console.log("dispatch test");
  request
    .delete(`${baseUrl}/post/${id}`)
    .then(response => {
      //   console.log(response.text);
      const action = deletePostSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
