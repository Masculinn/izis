import { combineReducers } from "redux";
import cookie from "../slices/cookie";
import discoveries from "../slices/discoveries";

const root = combineReducers({
  cookie: cookie,
  discoveries: discoveries,
});

export default root;
