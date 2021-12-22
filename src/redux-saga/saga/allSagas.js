import { call, put, all, takeLatest } from "@redux-saga/core/effects";
//import { getAxios } from "../../services/callApi";
import { getApiSet } from "../actions/action";
import { types } from "../types/types";
import axios from "axios";
import { axiosPokemon } from "../../services/callApi";

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

export function* rootSaga() {
  yield all([watchHandleGetAPi()]);
}
const getAxios = async () => {
  let pokemons = [];


  const res = await axios.get(` https://pokeapi.co/api/v2/pokemon?limit=150`);
  const data = res.data.results;
  return Promise.all(
    data.map(async (pokemon) => {
      const result = await axiosPokemon(pokemon.name);

      pokemons.push(result.data);
    })
  ).then(() => {
    return { pokemons };
  });
};
