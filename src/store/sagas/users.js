import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { addUserSuccess } from '../actions/users';

export function* addUser(action) {
  const { data } = yield call(api.get, `/users/${action.payload.username}`)
  const usernameData = {
    id: data.id,
    avatar: data.avatar_url,
    name: data.name,
    login: data.login
  }

  yield put(addUserSuccess(usernameData));
}
