import { createAction } from 'redux-actions'

export const testRequest = createAction('Test/TEST_REQUEST')
export const testSucceed = createAction('Test/TEST_SUCCEED')
export const testFailed = createAction('Test/TEST_FAILED')
