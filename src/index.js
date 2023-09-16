import React from "react";
import ReactDOM from "react-dom/client";
import Authentication from "./containers/";
import { Provider } from "react-redux";
import { store, history } from "./appRedux/store/index";
import { HistoryRouter } from "redux-first-history/rr6";
import { Input } from "antd";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <Provider store={store}>
    {/* have BrowserRouter in its default */}
    <HistoryRouter history={history}>
      <Authentication />
      {/* <Input.Password
        placeholder="input password"
        visibilityToggle={
          {
            // visible: passwordVisible,
            // onVisibleChange: setPasswordVisible,
          }
        }
      /> */}
    </HistoryRouter>
  </Provider>
  // </React.StrictMode>
);
