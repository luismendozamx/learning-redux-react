// Comments Reducer

const postComments = (state = [], action) => {
  switch (action.type) {
    // Add comment
    case 'ADD_COMMENT':
     return [
       ...state,
       {
         user: action.author,
         text: action.comment
       }
     ];

    // Remove comment
    case 'REMOVE_COMMENT':
      console.log('remove comment');
      const newState = [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      return newState;

    // Default
    default:
      return state;
  }
  return state;
};

const comments = (state = [], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state, // current state
      [action.postId]: postComments(state[action.postId], action) //overwrite post
    };
  }
  return state;
};

export default comments;
