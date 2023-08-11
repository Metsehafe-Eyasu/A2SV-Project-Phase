import React, { useState } from "react"; // Importing React and useState from 'react'
import { INote } from "../types"; // Importing INote type
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/outline"; // Importing icons from Heroicons
import { updateNote, deleteNote } from "../apis/notesApi"; // Importing API functions for updating and deleting notes
import { editNote, removeNote } from "../reducers/noteReducer"; // Importing action creators for editing and removing notes
import { useDispatch } from "react-redux"; // Importing useDispatch from 'react-redux'

/**
 * Note Component - Renders a single note and provides editing functionality.
 * @param {Props} note - The note object to be displayed and edited.
 * @returns {JSX.Element} - The rendered Note component.
 */
interface Props {
  note: INote; // Prop for the note data to be displayed
}

const Note: React.FC<Props> = ({ note }) => {
  const [editMode, setEditMode] = useState(false); // State for edit mode
  const [title, setTitle] = useState(note.title); // State for note title
  const [content, setContent] = useState(note.content); // State for note content
  const dispatch = useDispatch(); // Initializing the useDispatch hook

  /**
   * Handles the submission of the edited note.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedNote = { ...note, title, content }; // Updated note data
    const response = await updateNote(updatedNote); // Updating note using API
    if (response) {
      dispatch(editNote(updatedNote)); // Dispatching action to edit note in Redux store
    }
    setEditMode(false); // Exiting edit mode
  };

  /**
   * Handles the deletion of the note.
   */
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this note?")) return;
    await deleteNote(note.id); // Deleting note using API
    dispatch(removeNote(note.id)); // Dispatching action to remove note from Redux store
  };

  return (
    <div className="bg-blue-300 col-span-1 rounded">
      {editMode ? (
        <form
          className="flex flex-col items-start gap-2 h-full p-2"
          onSubmit={handleSubmit}
        >
          <input
            className="rounded w-full p-1"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="rounded w-full p-1"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex w-full justify-center gap-4">
            <button className="w-16 rounded bg-green-300 hover:bg-green-500 hover:text-white">
              Save
            </button>
            <button
              type="button"
              className="w-16 rounded bg-red-300 hover:bg-red-500 hover:text-white"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <div className="p-4 grid gap-2">
          <div className="flex justify-between items-center">
            <h2 className="text-xl">{title}</h2>
            <div className="flex gap-4">
              <PencilSquareIcon
                className="cursor-pointer h-5 w-5 text-blue-500"
                onClick={() => setEditMode(true)}
              />
              <TrashIcon
                className="cursor-pointer h-5 w-5 text-red-500"
                onClick={handleDelete}
              />
            </div>
          </div>
          <p className="text-blue-950">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Note; // Exporting the Note component as the default export
