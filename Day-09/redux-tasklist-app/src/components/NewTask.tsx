import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskAction } from "../reducers/taskReducer";
import { addTask } from "../services/tasks";

const NewTask: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = await addTask({ title, description, complete: false });
    dispatch(addTaskAction(newTask));

    setTitle("");
    setDescription("");
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

export default NewTask;
