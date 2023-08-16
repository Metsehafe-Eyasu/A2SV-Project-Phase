import { createStore, combineReducers } from "redux"; // Importing createStore and combineReducers from Redux
import taskReducer from "./reducers/taskReducer"; // Importing taskReducer
import focusedTaskReducer from "./reducers/focusedTaskReducer"; // Importing focusedTaskReducer
import filterReducer from "./reducers/filterReducer"; // Importing filterReducer

// Combining reducers to create the root reducer
export const reducers = combineReducers({
  tasks: taskReducer, // tasks state managed by taskReducer
  focusedTask: focusedTaskReducer, // focusedTask state managed by focusedTaskReducer
  filter: filterReducer // filter state managed by filterReducer
});

export type RootState = ReturnType<typeof reducers>;

// Creating the Redux store with the combined reducers
const store = createStore(reducers);

export default store; // Exporting the Redux store as the default export
