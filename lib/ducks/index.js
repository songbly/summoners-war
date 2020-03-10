import { combineReducers } from "redux";
import glory from "./glory";
// import monster from "./monster";
import emperor from './emperor'
const rootReducer = combineReducers({
  glory,
  // monster,
  emperor
});

export default rootReducer;
