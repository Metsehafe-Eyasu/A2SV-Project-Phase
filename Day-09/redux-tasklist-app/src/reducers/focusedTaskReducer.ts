import { Reducer } from "redux";
import { ITask } from "../types";

interface IFocusedTaskAction {
  type: string;
  payload: ITask | null;
}

const focusedTaskReducer: Reducer<ITask | null, IFocusedTaskAction> = (state = null, action) => {
  console.log("focusedTaskReducer");
  
  if (action.type === "SET_FOCUSED_TASK") {
    return action.payload;
  }
  console.log("after ");
  return state;
}

export const setFocusedTaskAction = (task: ITask | null) => {
  console.log("setFocusedTaskAction")
  return {
    type: "SET_FOCUSED_TASK",
    payload: task,
  };
}

export default focusedTaskReducer; 