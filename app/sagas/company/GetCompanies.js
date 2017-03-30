import { put, takeEvery } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

import * as api from '~/app/api'
import { SAGA_GET_COMPANIES, SET_COMPANIES } from '~/app/reducers/Company'

function* perform(action) {
  try {
    const response = yield api.getCompanies(action.payload)
    yield put(createAction(SET_COMPANIES)(response))
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_GET_COMPANIES, perform)
}

export default watch
