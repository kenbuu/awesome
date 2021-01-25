import { all, fork } from 'redux-saga/effects';
import accountSaga from './accountSaga';

export default function* rootSaga() {
    yield all([
        fork(accountSaga),
    ]);
}