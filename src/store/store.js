import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";


export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);