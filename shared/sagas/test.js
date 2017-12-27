import { takeEvery, delay } from 'redux-saga'
import { fork, call, put, select } from 'redux-saga/effects'
import * as actions from 'actions/test'
import * as apis from 'utils/api'

function* handleTest(action) {
  try {
    const result = yield call(apis.fetchTest)
    console.log('result...', result)
    yield put(actions.testSucceed(result.info))
  } catch (e) {
    yield put(actions.testFailed(e))
  }
}

export default function* testSage() {
  yield fork(takeEvery,String(actions.testRequest), handleTest)
}
