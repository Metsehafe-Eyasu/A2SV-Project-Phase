import { Reducer } from 'redux';
import { ITask } from '../types';

// Define the action types as constants to avoid using string literals directly
export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const SET_TASKS = 'SET_TASKS';

// Define the corresponding payload interfaces for each action type
interface AddTaskAction {
  type: typeof ADD_TASK;
  payload: ITask;
}

interface DeleteTaskAction {
  type: typeof DELETE_TASK;
  payload: ITask;
}

interface UpdateTaskAction {
  type: typeof UPDATE_TASK;
  payload: ITask;
}

interface ToggleTaskAction {
  type: typeof TOGGLE_TASK;
  payload: ITask;
}

interface SetTasksAction {
  type: typeof SET_TASKS;
  payload: ITask[];
}

// Define a union type of all possible action types
type TaskAction =
  | AddTaskAction
  | DeleteTaskAction
  | UpdateTaskAction
  | ToggleTaskAction
  | SetTasksAction;

/**
 * Task Reducer - Manages the state of tasks in the application.
 * @param {ITask[]} state - The current state of tasks.
 * @param {TaskAction} action - The action to be applied to the reducer.
 * @returns {ITask[]} - The updated state of tasks.
 */
const taskReducer: Reducer<ITask[], TaskAction> = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    case UPDATE_TASK:
      return state.map(task =>
        task.id === action.payload.id ? action.payload : task
      );
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload.id
          ? { ...task, complete: !task.complete }
          : task
      );
    case SET_TASKS:
      return action.payload;
    default:
      return state;
  }
};

// Rest of the code remains the same as in your original implementation


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
