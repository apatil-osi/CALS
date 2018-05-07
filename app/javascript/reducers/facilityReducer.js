import * as Constants from 'actions/actionTypes'

const initialState = {
  facility: null,
  children: null,
  complaints: null,
  errors: null
}

export const facilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case Constants.FACILITY_RESULTS_FETCH:
      return {...state, facility: null, children: null, complaints: null, errors: null}
    case Constants.FACILITY_RESULTS_FETCH_COMPLETE:
      return {...state, facility: action.payload.facility, children: action.payload.children, complaints: action.payload.complaints, errors: null}
    case Constants.FACILITY_RESULTS_FETCH_ERROR:
      return {...state, facility: null, children: null, complaints: null, errors: action.payload.errorResponse}
    default:
      return state
  }
}
