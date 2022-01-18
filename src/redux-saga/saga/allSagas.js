import { call, put, all, takeLatest } from "@redux-saga/core/effects";

import { getApiSet } from "../actions/action";
import { types } from "../types/types";

import { callAbilitiesEs, callTypeSpn, getAxios } from "../../services/callApi";
import { getTypeSet } from "../actions/actionTypeEs";
import { getAbiSet } from "../actions/actionAbilitesEs";

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

// funcion generadora  para traer el idioma Es u En de los  tipos
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

//funcion generadora  para traer el idioma Es u En de las habilidades

export function* handleGetAbiEs() {
  try {
    const res = yield call(callAbilitiesEs);
    // console.log(res)
    yield put(getAbiSet(res));
  } catch (err) {
    console.log(err);
  }
}

export function* watchhandleGetAbiEs() {
  yield takeLatest(types.LAN_ABILITIES_ES_EN, handleGetAbiEs);
}


export function* rootSaga() {
  yield all([watchHandleGetAPi(), watchhandleGetTypeEs(),watchhandleGetAbiEs()]);
}
