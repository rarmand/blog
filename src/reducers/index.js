// Ponieważ reducerów może być wiele w aplikacji
// (a każdy z nich może operować na wycinku stanu),
// musisz je jakoś połączyć. Służy do tego funkcja combineReducers

import { combineReducers } from "redux";
import { language } from "./language";

export default combineReducers(language);
