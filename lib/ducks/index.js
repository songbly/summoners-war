import { combineReducers } from "redux";
import status from "./status";
import monsters from './monsters'
const rootReducer = combineReducers({
  status,
  monsters
});

export default rootReducer;
