import request from 'superagent';
export const CREATE_POST = 'CREATE_POST';
export const READ_POSTS = 'READ_POSTS';

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
