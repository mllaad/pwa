import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { createReduxHistoryContext } from "redux-first-history";
import { createBrowserHistory } from "history";
import { authReducer } from "../features/Auth";
import { coreServiceReducer } from "../features/CoreService";
import { cardReducer } from "../features/Card";
import { billReducer } from "../features/Bill";
import { violationReducer } from "../features/Violation";
// redux-first-history github => https://github.com/salvoravida/redux-first-history
// ++++++++++++++++++++++++++++++++++++++++
// his solution might not work with the new RRDv6.4 Data APIs.
// ----------------------------------------

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({ history: createBrowserHistory() });

// RTK
export const store = configureStore({
  reducer: combineReducers({
    router: routerReducer,
    auth: authReducer,
    coreServices: coreServiceReducer,
    card: cardReducer,
    bill: billReducer,
    vio: violationReducer,
  }),
  // all default middlewares plus ...
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routerMiddleware),
});

export const history = createReduxHistory(store);
