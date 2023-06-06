import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { courseReducer } from "./reducers";


export default createStore(
  combineReducers({courseReducer}),
  composeWithDevTools(applyMiddleware(thunk))
)
