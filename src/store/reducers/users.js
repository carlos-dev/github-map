const INITIAL_STATE = [];

export default function users(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'ADD_USER':
      return [...state, {
        id: Math.random(),
        name: 'carlos',
        username: 'carlos-dev'
      },  {
        id: Math.random(),
        name: 'leonardo',
        username: 'leonofre'
      }]
      default:
        return state;
  }
}
