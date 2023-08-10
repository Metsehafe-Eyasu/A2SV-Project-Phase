import { createStore, combineReducers } from "redux";
import taskReducer from "./reducers/taskReducer";
import focusedTaskReducer from "./reducers/focusedTaskReducer";

const reducers = combineReducers({
  tasks: taskReducer,
  focusedTask: focusedTaskReducer,
})

const store = createStore(reducers);

export default store;
