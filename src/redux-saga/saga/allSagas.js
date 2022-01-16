import { call, put, all, takeLatest } from "@redux-saga/core/effects";

import { getApiSet } from "../actions/action";
import { types } from "../types/types";

import { callTypeSpn, getAxios } from "../../services/callApi";
import { getTypeSet } from "../actions/actionTypeEs";

export function* handleGetAPi() {
  try {
    const res = yield call(getAxios);

    yield put(getApiSet(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchHandleGetAPi() {
  yield takeLatest(types.GET_API, handleGetAPi);
}

export function* handleGetTypeEs() {
  try {
    const res = yield call(callTypeSpn);
    // console.log(res)
    yield put(getTypeSet(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchhandleGetTypeEs() {
  yield takeLatest(types.GET_TYPE_SP, handleGetTypeEs);
}

export function* rootSaga() {
  yield all([watchHandleGetAPi(), watchhandleGetTypeEs()]);
}
