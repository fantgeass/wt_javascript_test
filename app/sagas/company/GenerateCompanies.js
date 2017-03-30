import { put, takeEvery } from 'redux-saga/effects'
import { createAction } from 'redux-actions'

import * as api from '~/app/api'
import { SAGA_GENERATE_COMPANIES, SAGA_GET_COMPANIES } from '~/app/reducers/Company'

function* perform(_action) {
  try {
    yield api.generateCompanies()
    yield put(createAction(SAGA_GET_COMPANIES)(1))
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_GENERATE_COMPANIES, perform)
}

export default watch
