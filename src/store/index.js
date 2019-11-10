import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(logger, thunk, promise));
const persistor = persistStore(store);

export { store, persistor }; 