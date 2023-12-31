import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Importing createSlice and PayloadAction from Redux Toolkit
import { INote } from "../types"; // Importing INote type from '../types'

/**
 * Redux slice for notes management.
 */
const noteSlice = createSlice({
  name: 'notes', // Name of the slice
  initialState: [] as INote[], // Initial state (empty array of notes)
  reducers: {
    /**
     * Reducer for adding a new note to the state.
     * @param {INote[]} state - Current state.
     * @param {PayloadAction<INote>} action - Payload containing the new note.
     * @returns {INote[]} - New state with the added note.
     */
    addNote: (state, action: PayloadAction<INote>) => {
      return [...state, action.payload]; // Adding the new note to the state array
    },
    
    /**
     * Reducer for editing an existing note in the state.
     * @param {INote[]} state - Current state.
     * @param {PayloadAction<INote>} action - Payload containing the edited note.
     */
    editNote: (state, action: PayloadAction<INote>) => {
      const noteToEdit = state.find(note => note.id === action.payload.id); // Finding the note to edit
      if (noteToEdit) {
        noteToEdit.title = action.payload.title; // Updating title
        noteToEdit.content = action.payload.content; // Updating content
      }
    },
    
    /**
     * Reducer for removing a note from the state.
     * @param {INote[]} state - Current state.
     * @param {PayloadAction<number>} action - Payload containing the ID of the note to be removed.
     * @returns {INote[]} - New state without the removed note.
     */
    removeNote: (state, action: PayloadAction<number>) => {
      return state.filter(note => note.id !== action.payload); // Removing the note with the specified ID
    },
    
    /**
     * Reducer for setting the notes in the state.
     * @param {INote[]} _state - Current state.
     * @param {PayloadAction<INote[]>} action - Payload containing the array of notes.
     * @returns {INote[]} - New state with the provided notes.
     */
    setNotes: (_state, action: PayloadAction<INote[]>) => {
      return action.payload; // Setting the state to the provided array of notes
    }
  }
});

// Exporting actions generated by createSlice
export const { addNote, editNote, removeNote, setNotes } = noteSlice.actions;

// Exporting the reducer generated by createSlice
export default noteSlice.reducer;
