// @flow
import type Action from '~/app/Types'
import update from 'immutability-helper'

export const SET_COMPANIES = 'company/SET_COMPANIES'
export const SAGA_GET_COMPANIES = 'company/SAGA_GET_COMPANIES'
export const SAGA_GENERATE_COMPANIES = 'company/SAGA_GENERATE_COMPANIES'
export const SAGA_CREATE_COMPANY = 'company/SAGA_CREATE_COMPANY'

const initialState = {
  companies: [],
  pagination: {
    current: 1,
    display: 10,
    total: 0
  }
}

export default function reducer(state: Object = initialState, action: Action) {
  const p = action.payload
  switch (action.type) {
    case SET_COMPANIES:
      return update(state, {
        companies: {$set: p.companies},
        pagination: {$set: p.pagination}
      })
    default:
      return state
  }
}
