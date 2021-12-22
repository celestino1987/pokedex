import { combineReducers,createStore,applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from "../saga/allSagas";
import { reducerApi } from "../reducers/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';



const reducer = combineReducers({
    reducerApi:reducerApi 
 
 });
 
 const sagaMiddleware = createSagaMiddleware()
 
 const middleware = [sagaMiddleware]
 
 const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware) ) )
 sagaMiddleware.run(rootSaga)
 
 export default store;