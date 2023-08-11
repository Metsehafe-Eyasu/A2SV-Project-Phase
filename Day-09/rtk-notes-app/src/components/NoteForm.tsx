import React, { useState } from "react"; // Importing React and useState from 'react'
import { createNote } from "../apis/notesApi"; // Importing createNote function from notesApi
import { addNote } from "../reducers/noteReducer"; // Importing action creator for adding a note
import { useDispatch } from "react-redux"; // Importing useDispatch from 'react-redux'

/**
 * NoteForm Component - Renders a form for creating new notes.
 * @returns {JSX.Element} - The rendered NoteForm component.
 */
const NoteForm: React.FC = () => {
  const [title, setTitle] = useState(""); // State for note title
  const [content, setContent] = useState(""); // State for note content
  const dispatch = useDispatch(); // Initializing the useDispatch hook

  /**
   * Handles the submission of the new note.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote = { title, content }; // New note data
    const response = await createNote(newNote); // Creating a new note using API
    console.log(response);
    if (response) {
      dispatch(addNote(response)); // Dispatching action to add new note to Redux store
    }
    setTitle("");
    setContent("");
  };

  return (
    <form
      className="flex flex-col gap-8 p-8 m-4 bg-blue-400 rounded"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl">New Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="outline-none p-2 rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        className="outline-none p-2 rounded"
      />
      <button
        type="submit"
        disabled={!title || !content}
        className="outline-none disabled:cursor-not-allowed bg-blue-200 p-2 font-bold rounded-lg"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm; // Exporting the NoteForm component as the default export
