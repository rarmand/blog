import React from "react";
import ReactDOM from "react-dom";
import "./index.sass";
import * as serviceWorker from "./serviceWorker";
import { store } from "./stores/store";
import { Provider } from "react-redux";

import { connect } from "react-redux";
import { languageFetched } from "./actions";
import { AppContainer } from "./dispatchers";

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
