//console.log("hello");
import { store } from "../store/index";
import React from "react";
import ReactDOM from "react-dom";
import { Main } from "../components/Main";
import { Dashboard } from "../components/Dashboard";
//console.log(store.getState());

ReactDOM.render(<Main />, document.getElementById("app"));
