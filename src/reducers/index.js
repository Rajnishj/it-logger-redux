import { combineReducers } from "redux";
import LogReducer from "./LogReducer";
import TechReducer from "./TechReducer";

const rootReducer = combineReducers({
  log: LogReducer,
  tech: TechReducer,
});

export default rootReducer;
