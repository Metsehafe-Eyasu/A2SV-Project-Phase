import React from "react"; // Importing React from 'react'
import { useSelector } from "react-redux"; // Importing useSelector from 'react-redux'
import { ITask } from "../types"; // Importing custom types
import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline"; // Importing CheckIcon and TrashIcon from Heroicons
import { useDispatch } from "react-redux"; // Importing useDispatch from 'react-redux'
import { deleteTaskAction, toggleTaskAction } from "../reducers/taskReducer"; // Importing deleteTaskAction and toggleTaskAction from taskReducer
import { setFocusedTaskAction } from "../reducers/focusedTaskReducer"; // Importing setFocusedTaskAction from focusedTaskReducer
import { updateTask, deleteTask } from "../services/tasks"; // Importing updateTask and deleteTask from tasks service

/**
 * Tasks Component - Renders a list of tasks with the ability to delete and toggle them.
 * @returns {JSX.Element} - The rendered Tasks component.
 */
const Tasks: React.FC = () => {
  const tasks: ITask[] = useSelector((state) => state.tasks); // Using useSelector to get tasks from Redux state
  const focusedTask: ITask | null = useSelector((state) => state.focusedTask); // Using useSelector to get focusedTask from Redux state
  const filter: string = useSelector((state) => state.filter); // Using useSelector to get filter from Redux state
  const dispatch = useDispatch(); // Using useDispatch from react-redux

  /**
   * Handles task deletion.
   * Sets focused task to null, deletes task on the server, and dispatches action to update Redux state.
   * @param {ITask} task - The task to be deleted.
   */
  const handleDelete = async (task: ITask) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;
    dispatch(setFocusedTaskAction(null));
    await deleteTask(task.id);
    dispatch(deleteTaskAction(task));
    // Check if the task being deleted is the focused task
    if (focusedTask?.id === task.id) dispatch(setFocusedTaskAction(null))
  };

  /**
   * Handles task toggling.
   * Sets focused task to null, toggles task on the server, and dispatches action to update Redux state.
   * @param {ITask} task - The task to be toggled.
   */
  const handleToggle = async (task: ITask) => {
    dispatch(setFocusedTaskAction(null));
    const updatedTask = await updateTask({ ...task, complete: !task.complete });
    dispatch(toggleTaskAction(updatedTask));
    // Check if the task being toggled is the focused task
    if (focusedTask?.id === task.id) dispatch(setFocusedTaskAction(updatedTask))
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "ALL") return true;
    else if (filter === "COMPLETED") return task.complete;
    else if (filter === "PENDING") return !task.complete;
    return false;
  });

  return (
    <ul className="mt-2 text-lg flex flex-col gap-2 w-96 h-64 overflow-y-scroll">
      {filteredTasks.map((task) => (
        <li
          key={task.id}
          className={`text-cyan-950 flex justify-between p-2 ${
            task.complete ? "bg-green-100 line-through" : "bg-red-100"
          } hover:shadow rounded-lg`}
          onClick={() => {
            console.log("Task clicked: ", task);
            dispatch(setFocusedTaskAction(task));
          }}
        >
          {task.title}
          <div className="flex gap-2">
            <CheckIcon
              className="h-8 w-8 p-1 rounded-lg text-gray-700 hover:bg-green-500 hover:text-white"
              onClick={() => handleToggle(task)}
            />
            <TrashIcon
              className="h-8 w-8 p-1 rounded-lg text-gray-700 hover:bg-red-500 hover:text-white"
              onClick={() => handleDelete(task)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Tasks; // Exporting the Tasks component as the default export
