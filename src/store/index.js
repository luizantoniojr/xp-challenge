import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";

import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk, promise)
);

export default store; 