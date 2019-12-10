import { Provider } from "react-redux";
import React from "react";
import { ConnectedDashboard } from "./Dashboard";
import { store } from "../store/index";
export const Main = () => (
  <Provider store={store}>
    <div>
      <ConnectedDashboard />
    </div>
  </Provider>
);
