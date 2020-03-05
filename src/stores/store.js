import { createStore } from "redux";
import reducers from "../reducers";

export const store = createStore(reducers);

// przechowuje stan całej aplikacji
// aby react mógł z niego korzystać = dodanie komponentu Provider
// do głównego index.js
