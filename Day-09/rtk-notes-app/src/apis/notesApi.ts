import axios from 'axios'; // Importing axios library
import { INote, INoteForm } from '../types'; // Importing INote and INoteForm types from '../types'

const API_BASE_URL = 'http://localhost:3001'; // API base URL

/**
 * Fetches notes from the API.
 * @returns {Promise<INote[]>} - A promise that resolves with an array of notes.
 */
export async function fetchNotes(): Promise<INote[]> {
  const response = await axios.get<INote[]>(`${API_BASE_URL}/notes`); // Sending GET request to fetch notes
  return response.data; // Returning the fetched notes data
}

/**
 * Creates a new note using the provided data.
 * @param {INoteForm} note - The note data to be created.
 * @returns {Promise<INote>} - A promise that resolves with the created note.
 */
export async function createNote(note: INoteForm): Promise<INote> {
  const response = await axios.post<INote>(`${API_BASE_URL}/notes`, note); // Sending POST request to create a note
  return response.data; // Returning the created note data
}

/**
 * Updates an existing note using the provided data.
 * @param {INote} note - The updated note data.
 * @returns {Promise<INote>} - A promise that resolves with the updated note.
 */
export async function updateNote(note: INote): Promise<INote> {
  const response = await axios.put<INote>(`${API_BASE_URL}/notes/${note.id}`, note); // Sending PUT request to update a note
  return response.data; // Returning the updated note data
}

/**
 * Deletes a note with the specified ID.
 * @param {number} noteId - The ID of the note to be deleted.
 * @returns {Promise<void>} - A promise that resolves when the deletion is successful.
 */
export async function deleteNote(noteId: number): Promise<void> {
  await axios.delete(`${API_BASE_URL}/notes/${noteId}`); // Sending DELETE request to delete a note
}
