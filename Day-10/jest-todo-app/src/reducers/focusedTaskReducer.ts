import { Reducer } from "redux"; // Importing Reducer type from Redux
import { ITask } from "../types"; // Importing ITask interface from types

// Defining the shape of the action for focused task reducer
interface IFocusedTaskAction {
  type: string;
  payload: ITask | null;
}

/**
 * Focused Task Reducer - Manages the state of the focused task.
 * @param {ITask | null} state - The current state of the focused task.
 * @param {IFocusedTaskAction} action - The action to be applied to the reducer.
 * @returns {ITask | null} - The updated state of the focused task.
 */
const focusedTaskReducer: Reducer<ITask | null, IFocusedTaskAction> = (state = null, action) => {
  if (action.type === "SET_FOCUSED_TASK") {
    return action.payload; // Updates the focused task state with the provided payload
  }
  return state; // Returns the current state if the action type is not recognized
}

/**
 * Action creator for setting the focused task.
 * @param {ITask | null} task - The task to be set as the focused task.
 * @returns {Object} - An action object to be dispatched to the reducer.
 */
export const setFocusedTaskAction = (task: ITask | null) => {
  return {
    type: "SET_FOCUSED_TASK",
    payload: task,
  };
}

export default focusedTaskReducer; // Exporting the focusedTaskReducer as the default export
