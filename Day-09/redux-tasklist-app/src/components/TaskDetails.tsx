import React, { useEffect, useState } from "react"; // Importing React and useState from 'react'
import { useDispatch, useSelector } from "react-redux"; // Importing useDispatch and useSelector from 'react-redux'
import { setFocusedTaskAction } from "../reducers/focusedTaskReducer"; // Importing setFocusedTaskAction from focusedTaskReducer
import { updateTaskAction } from "../reducers/taskReducer"; // Importing updateTaskAction from taskReducer
import { updateTask } from "../services/tasks"; // Importing updateTask from tasks service
import { FaceFrownIcon } from "@heroicons/react/24/solid"; // Importing FaceFrownIcon from Heroicons
import { XMarkIcon } from "@heroicons/react/20/solid"; // Importing XMarkIcon from Heroicons

/**
 * TaskDetails Component - Renders the details of a selected task and provides edit functionality.
 * Uses Redux for state management.
 * @returns {JSX.Element} - The rendered TaskDetails component.
 */
const TaskDetails: React.FC = () => {
  const dispatch = useDispatch(); // Using useDispatch hook from react-redux
  const focusedTask = useSelector((state) => state.focusedTask); // Using useSelector to get the focused task from Redux state

  const [editMode, setEditMode] = useState(false); // State for edit mode
  const [title, setTitle] = useState(""); // State for edited task title
  const [description, setDescription] = useState(""); // State for edited task description

  useEffect(() => {
    setTitle(focusedTask?.title || "")
    setDescription(focusedTask?.description || "")
  }, [focusedTask])

  /**
   * Resets the focused task.
   */
  const handleReset = () => {
    dispatch(setFocusedTaskAction(null));
  };

  /**
   * Handles form submission to update a task.
   * Dispatches action to update Redux state and updates the task on the server.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event.
   */
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedTask = { ...focusedTask, title, description };
    await updateTask(updatedTask);
    dispatch(updateTaskAction(updatedTask));
    dispatch(setFocusedTaskAction(updatedTask))
    setEditMode(false);
  };

  // Rendering based on the presence of a focused task
  if (focusedTask === null) {
    return (
      <div className="flex items-center justify-center flex-col h-full gap-8">
        <FaceFrownIcon className="w-32 h-32" />
        <h1 className="text-2xl text-gray-700">No task selected</h1>
      </div>
    );
  }

  return (
    <div className="m-8 h-full">
      <h1 className="text-2xl text-gray-700 pb-2 mb-4 border-b border-gray-400 flex justify-between items-center">
        Task Details
        <XMarkIcon
          className="w-6 h-6 hover:bg-red-400 hover:text-white rounded-lg"
          onClick={handleReset}
        />
      </h1>
      {editMode ? (
        // Render the edit form when in edit mode
        <form className="flex flex-col gap-2" onSubmit={handleUpdate}>
          <input
            type="text"
            className="border border-gray-400 rounded-lg p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border border-gray-400 rounded-lg p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex justify-between">
            <button className="bg-green-400 text-white px-4 py-2 rounded-lg">
              Save
            </button>
            <button
              className="bg-red-400 text-white px-4 py-2 rounded-lg"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        // Render task details when not in edit mode
        <div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <div className="flex items-center gap-8 p-1">
                <h2 className="text-xl text-gray-700">{focusedTask.title}</h2>
                <p
                  className={`text-xs px-2 py-1 rounded-full uppercase ${
                    !focusedTask.complete ? "bg-red-400" : "bg-green-500"
                  }`}
                >
                  {focusedTask.complete ? "Complete" : "Incomplete"}
                </p>
              </div>
              <button
                className="text-gray-700 hover:text-gray-900"
                onClick={() => setEditMode(true)}
              >
                Edit
              </button>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">{focusedTask.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails; // Exporting the TaskDetails component as the default export
