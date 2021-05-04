// require("file-loader?name=[name].[ext]!./index.html");

import ReactDOM from "react-dom";
import App from "./App";
import "./App.scss";
import "./App.css";
// import { lazy } from "react";

// const App = lazy(() => import("./App"));

ReactDOM.render(<App />, document.getElementById("root"));
