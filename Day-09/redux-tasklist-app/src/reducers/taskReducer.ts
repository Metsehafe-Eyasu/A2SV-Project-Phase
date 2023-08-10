import { Reducer } from "redux"; // Importing Reducer type from Redux
import { ITask } from "../types"; // Importing ITask interface from types

// Defining the shape of the action for task reducer
interface ITaskAction {
  type: string;
  payload: ITask | ITask[];
}

/**
 * Task Reducer - Manages the state of tasks in the application.
 * @param {ITask[]} state - The current state of tasks.
 * @param {ITaskAction} action - The action to be applied to the reducer.
 * @returns {ITask[]} - The updated state of tasks.
 */
const taskReducer: Reducer<ITask[], ITaskAction> = (
  state = [],
  action
) => {
  if (action.type === "ADD_TASK") {
    return [...state, action.payload]; // Adds the payload task to the current state
  } else if (action.type === "DELETE_TASK") {
    return state.filter((task) => task.id !== action.payload.id); // Removes the task with matching ID from the state
  } else if (action.type === "UPDATE_TASK") {
    return state.map((task) => {
      if (task.id === action.payload.id) {
        return action.payload; // Updates the task with matching ID with the payload
      } else {
        return task;
      }
    });
  } else if (action.type === "TOGGLE_TASK") {
    return state.map((task) => {
      if (task.id === action.payload.id) {
        return {
          ...task,
          complete: task.complete ? false : true,
        };
      }
      return task;
    });
  } else if (action.type === "SET_TASKS") {
    return action.payload; // Sets the tasks to the payload
  }
  return state; // Returns the current state if the action type is not recognized
};

/**
 * Action creator for setting tasks in the state.
 * @param {ITask[]} tasks - The tasks to be set in the state.
 * @returns {Object} - An action object to be dispatched to the reducer.
 */
export const setTasksAction = (tasks: ITask[]) => {
  return {
    type: "SET_TASKS",
    payload: tasks,
  };
}

/**
 * Action creator for adding a task to the state.
 * @param {ITask} task - The task to be added.
 * @returns {Object} - An action object to be dispatched to the reducer.
 */
export const addTaskAction = (task: ITask) => {
  return {
    type: "ADD_TASK",
    payload: task
  };
};

/**
 * Action creator for deleting a task from the state.
 * @param {ITask} task - The task to be deleted.
 * @returns {Object} - An action object to be dispatched to the reducer.
 */
export const deleteTaskAction = (task: ITask) => {
  return {
    type: "DELETE_TASK",
    payload: task,
  };
};

/**
 * Action creator for updating a task in the state.
 * @param {ITask} task - The updated task.
 * @returns {Object} - An action object to be dispatched to the reducer.
 */
export const updateTaskAction = (task: ITask) => {
  return {
    type: "UPDATE_TASK",
    payload: task,
  };
};

/**
 * Action creator for toggling the complete status of a task.
 * @param {ITask} task - The task to be toggled.
 * @returns {Object} - An action object to be dispatched to the reducer.
 */
export const toggleTaskAction = (task: ITask) => {
  return {
    type: "TOGGLE_TASK",
    payload: task,
  };
}

export default taskReducer; // Exporting the taskReducer as the default export
