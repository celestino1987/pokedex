import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga/allSagas";
import { reducerApi } from "../reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducerTypeEs } from "../reducers/reducerTypeEs";
import { reducerLanguage } from "../reducers/reducerLanguage";

const reducer = combineReducers({
  reducerTypeEs: reducerTypeEs,
  reducerApi: reducerApi,
  reducerLanguage: reducerLanguage,
});

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSaga);

export default store;
