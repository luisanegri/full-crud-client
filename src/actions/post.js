import request from 'superagent';
export const CREATE_POST = 'CREATE_POST';

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
