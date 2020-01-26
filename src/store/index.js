import { createStore, applyMiddleware } from 'redux';
//import { defaultState } from '../../server/defaultState';
import { logger} from "redux-logger";
import  rootReducer from '../reducers/index';
 import  createSagaMiddleware  from "redux-saga";
import * as sagas from '../sagas/sagas.mock';

 

 const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,applyMiddleware(logger, sagaMiddleware)); 
 for (let saga in sagas) {
     sagaMiddleware.run(sagas[saga]);
 }