export const addUserRequest = username => ({
  type: 'ADD_USER_REQUEST'
})

export const addUserSuccess = data => ({
  type: 'ADD_USER_SUCCESS',
  payload: { data }
})
