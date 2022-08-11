import { legacy_createStore as createStore } from "redux";
import rootReducer from "./reduce";
import { composeWithDevTools } from "redux-devtools-extension";
const composeEnhancer = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancer);

export default store;
