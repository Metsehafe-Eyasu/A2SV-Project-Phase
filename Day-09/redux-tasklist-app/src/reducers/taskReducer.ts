import { Reducer } from "redux";
import { ITask } from "../types";

interface ITaskAction {
  type: string;
  payload: ITask | ITask[];
}

const taskReducer: Reducer<ITask[], ITaskAction> = (
  state = [],
  action
) => {
  if (action.type === "ADD_TASK") {
    return [...state, action.payload];
  } else if (action.type === "DELETE_TASK") {
    return state.filter((task) => task.id !== action.payload.id);
  } else if (action.type === "UPDATE_TASK") {
    return state.map((task) => {
      if (task.id === action.payload.id) {
        return action.payload;
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
    return action.payload;
  }
  return state;
};

export const setTasksAction = (tasks: ITask[]) => {
  return {
    type: "SET_TASKS",
    payload: tasks,
  };
}

export const addTaskAction = (task: ITask) => {
  return {
    type: "ADD_TASK",
    payload: task
  };
};

export const deleteTaskAction = (task: ITask) => {
  return {
    type: "DELETE_TASK",
    payload: task,
  };
};

export const updateTaskAction = (task: ITask) => {
  return {
    type: "UPDATE_TASK",
    payload: task,
  };
};

export const toggleTaskAction = (task: ITask) => {
  return {
    type: "TOGGLE_TASK",
    payload: task,
  };
}

export default taskReducer;
