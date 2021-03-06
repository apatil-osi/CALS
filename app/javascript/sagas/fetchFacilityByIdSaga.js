import {takeLatest, put, call} from 'redux-saga/effects'
import {delay} from 'redux-saga'
import {fetchRequest, fetchRequestWithErrors} from '../helpers/http'
import {urlPrefixHelper} from '../helpers/url_prefix_helper.js.erb'
import {FACILITY_RESULTS_FETCH, fetchSuccess, fetchFailure} from 'actions/facilityActions'

// worker saga: makes the api call when watcher saga sees the action
export function * fetchFacilityById (action) {
  try {
    const url = '/facilities/' + action.payload.facilityParams.id + '/profile'
    const response = yield call(fetchRequestWithErrors, url, 'GET', null)
    yield put(fetchSuccess({facility: response}))
  } catch (error) {
    const errorResponse = yield call([error, error.json])
    yield put(fetchFailure({errorResponse}))
  }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function * fetchFacilityByIdSaga () {
  yield takeLatest(FACILITY_RESULTS_FETCH, fetchFacilityById)
}
