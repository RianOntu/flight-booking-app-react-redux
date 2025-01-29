import { applyMiddleware, createStore } from "redux";
import formReducer from "./formReducer";
import logger from 'redux-logger'
const store = createStore(formReducer,applyMiddleware(logger));

export default store;
