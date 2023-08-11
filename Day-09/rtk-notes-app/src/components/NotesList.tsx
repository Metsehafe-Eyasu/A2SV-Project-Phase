import React from 'react'; // Importing React from 'react'
import { useSelector } from 'react-redux'; // Importing useSelector from 'react-redux'
import { RootState } from '../store/index'; // Importing RootState type from the store
import Note from './Note'; // Importing the Note component

/**
 * NotesList Component - Renders a list of notes.
 * @returns {JSX.Element} - The rendered NotesList component.
 */
const NotesList: React.FC = () => {
  const notes = useSelector((state: RootState) => state.notes); // Getting notes from the Redux store

  return (
    <div className='md:h-full md:overflow-y-scroll grid md:grid-cols-2 gap-4'>
      {notes.map(note => (
        <Note key={note.id} note={note} /> // Rendering the Note component for each note
      ))}
    </div>
  );
};

export default NotesList; // Exporting the NotesList component as the default export
