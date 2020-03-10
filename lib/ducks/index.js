import { combineReducers } from "redux";
import glory from "./glory";
import monsters from './monsters'
const rootReducer = combineReducers({
  glory,
  monsters
});

export default rootReducer;
