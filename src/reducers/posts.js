export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_POST':
      return [...state, action.payload];
    case 'READ_POSTS':
      return action.payload;
    case 'DELETE_POST':
      // only delete from page when refreshing
      const newState = [...state];
      newState.filter(post => post.id !== action.payload);
      return newState;
    default:
      return state;
  }
}
