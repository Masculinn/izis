import { combineReducers } from "redux";
import cookie from "../slices/cookie";

const root = combineReducers({
  cookie: cookie,
});

export default root;
