import { takeEvery } from 'redux-saga/effects'
import { browserHistory } from 'react-router'

import * as api from '~/app/api'
import { SAGA_CREATE_COMPANY } from '~/app/reducers/Company'
import { routes } from '~/app/config'

function* perform(action) {
  try {
    yield api.createCompany(action.payload)
    yield browserHistory.push(routes.companies.index)
  } catch (err) { console.log(err) }
}

function* watch() {
  yield takeEvery(SAGA_CREATE_COMPANY, perform)
}

export default watch
