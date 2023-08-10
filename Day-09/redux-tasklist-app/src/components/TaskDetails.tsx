import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFocusedTaskAction } from "../reducers/focusedTaskReducer";
import { updateTaskAction } from "../reducers/taskReducer";
import { updateTask } from "../services/tasks";
import { FaceFrownIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";

const TaskDetails: React.FC = () => {
  const dispatch = useDispatch();
  const focusedTask = useSelector((state) => state.focusedTask);

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleReset = () => {
    dispatch(setFocusedTaskAction(null));
  };

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedTask = { ...focusedTask, title, description };
    await updateTask(updatedTask);
    dispatch(updateTaskAction(updatedTask));
    setEditMode(false);
  };

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
        <form className="flex flex-col gap-2" onSubmit={handleUpdate}>
          <input
            type="text"
            className="border border-gray-400 rounded-lg p-2"
            value={focusedTask.title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="border border-gray-400 rounded-lg p-2"
            value={focusedTask.description}
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

export default TaskDetails;
