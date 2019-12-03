import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addUserSuccess } from '../actions/users';

export function* addUser(action) {
  const { data } = yield call(api.get, `/repos/${action.payload.username}`)
  console.log(data)
  const usernameData = {
    id: data.id,
    name: data.full_name,
    description: data.description
  }

  yield put(addUserSuccess(usernameData));
}
