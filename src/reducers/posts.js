export default function(state = [], action = {}) {
  switch (action.type) {
    case 'CREATE_POST':
      return [...state, action.payload];
    case 'READ_POSTS':
      return action.payload;
    default:
      return state;
  }
}
