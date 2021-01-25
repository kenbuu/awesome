import { put, takeLatest } from 'redux-saga/effects';
import Actions, { getActionFail, getActionSuccess } from '../Action/action';

function* getProvince(actions) {
    try {
        const res = actions.a + actions.b

        yield put({
            type: getActionSuccess(Actions.LOGIN),
            data: res,
        });

    } catch (error) {
        yield put({
            type: getActionFail(Actions.GET_PROVINCE),
        });
    }
}


export default function* accountSaga() {
    yield takeLatest(Actions.LOGIN, getProvince);
}