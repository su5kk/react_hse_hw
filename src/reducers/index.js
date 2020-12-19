import { combineReducers } from "redux";
import { taskReducer } from "./task";
import { themeReducer } from "./theme";
import {projectReducer} from "./project";

export const rootReducer = combineReducers({
  task: taskReducer,
  theme: themeReducer,
  project: projectReducer
})