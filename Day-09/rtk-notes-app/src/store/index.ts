import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore from Redux Toolkit
import noteReducer from '../reducers/noteReducer'; // Importing the noteReducer

/**
 * Redux store configuration.
 */
const store = configureStore({
  reducer: {
    notes: noteReducer // Assigning the noteReducer to the 'notes' slice
  }
});

/**
 * The type for the RootState.
 */
export type RootState = ReturnType<typeof store.getState>;

export default store; // Exporting the configured Redux store
