import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from 'history';
import { authReducer } from '../features/Auth'
import { coreServiceReducer } from "../features/CoreService";

// redux-first-history github => https://github.com/salvoravida/redux-first-history
// ++++++++++++++++++++++++++++++++++++++++
// his solution might not work with the new RRDv6.4 Data APIs.
// ----------------------------------------

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer
} = createReduxHistoryContext({ history: createBrowserHistory() });

// RTK
export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    auth: authReducer,
    coreServices: coreServiceReducer,
  }),
  // all default middlewares plus ...
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);