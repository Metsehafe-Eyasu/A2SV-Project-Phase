import React, { useEffect } from "react"; // Importing React and useEffect from 'react'
import NotesList from "./components/NotesList"; // Importing NotesList component
import NoteForm from "./components/NoteForm"; // Importing NoteForm component
import { fetchNotes } from "./apis/notesApi"; // Importing fetchNotes function from notesApi
import { setNotes } from "./reducers/noteReducer"; // Importing setNotes action from noteReducer
import { useDispatch } from "react-redux"; // Importing useDispatch from 'react-redux'

/**
 * App Component - Main component that renders the Notes App.
 * @returns {JSX.Element} - The rendered App component.
 */
const App: React.FC = () => {
  const dispatch = useDispatch(); // Using useDispatch from react-redux

  useEffect(() => {
    /**
     * Fetches notes data and updates Redux state with fetched notes.
     */
    const getNotes = async () => {
      const notes = await fetchNotes();
      dispatch(setNotes(notes)); // Dispatching setNotes action with fetched notes
    };

    getNotes(); // Calling the getNotes function
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="p-8 grid md:grid-cols-2 bg-blue-200 gap-4 md:h-screen">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-mono uppercase pb-2 border-b border-black">
          Notes App
        </h1>
        <NoteForm /> {/* Rendering the NoteForm component */}
      </div>
      <NotesList /> {/* Rendering the NotesList component */}
    </div>
  );
};

export default App; // Exporting the App component as the default export
