import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import train from "./train";

export default combineReducers({
  auth,
  message,
  train
});
