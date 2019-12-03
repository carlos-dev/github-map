export const addUserRequest = username => ({
  type: 'ADD_USER_REQUEST',
  payload: { username }
})

export const addUserSuccess = data => ({
  type: 'ADD_USER_SUCCESS',
  payload: { data }
})
