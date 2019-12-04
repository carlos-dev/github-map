const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_USER_SUCCESS':
      return [...state, action.payload.data]
    case 'REMOVE_USER':
      return state.filter(todo => todo.id !== action.payload.id)
    default:
      return state;
  }
}
