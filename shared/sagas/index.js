import { fork } from 'redux-saga/effects'
import testSage from './test'

const sagas = [
  fork(testSage)
]

export default function* rootSaga () {
  yield sagas
}
