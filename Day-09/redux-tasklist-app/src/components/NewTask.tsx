import React, { useState } from "react"; // Importing React and useState from 'react'
import { useDispatch } from "react-redux"; // Importing useDispatch from 'react-redux'
import { addTaskAction } from "../reducers/taskReducer"; // Importing addTaskAction from taskReducer
import { addTask } from "../services/tasks"; // Importing addTask from tasks service

/**
 * NewTask Component - Renders a form to add a new task.
 * Uses Redux for state management.
 * @returns {JSX.Element} - The rendered NewTask component.
 */
const NewTask: React.FC = () => {
  const [title, setTitle] = useState<string>(""); // State for task title
  const [description, setDescription] = useState<string>(""); // State for task description
  const dispatch = useDispatch(); // Using useDispatch hook from react-redux

  /**
   * Handles form submission to add a new task.
   * Dispatches action to update Redux state and adds the task to the server.
   * @param {React.FormEvent<HTMLFormElement>} e - Form submission event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = await addTask({ title, description, complete: false }); // Adding the task to the server
    dispatch(addTaskAction(newTask)); // Dispatching action to update Redux state

    setTitle(""); // Resetting title state
    setDescription(""); // Resetting description state
  };

  return (
    <div className="p-2 bg-slate-400 w-96 rounded h-60">
      <h2 className="text-2xl mx-4">Add Task</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 m-4">
        <input
          type="text"
          placeholder="Task Title"
          className="border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-cyan-950"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Task Description"
          className="border-2 border-gray-400 p-2 rounded-lg focus:outline-none focus:border-cyan-950"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-cyan-950 text-white p-2 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={title === "" || description === ""}
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default NewTask; // Exporting the NewTask component as the default export
