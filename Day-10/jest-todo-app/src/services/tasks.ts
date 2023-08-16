import axios from 'axios'; // Importing axios for making HTTP requests

const baseUrl: string = 'http://localhost:3001/tasks'; // The base URL for API requests

/**
 * Fetches all tasks from the server.
 * @returns {Promise<Array>} - A promise containing an array of tasks.
 */
export const getAllTasks = async () => {
  const response = await axios.get(baseUrl); // Making a GET request to the base URL
  return response.data; // Returning the data from the response
}

/**
 * Adds a new task to the server.
 * @param {Object} task - The task object to be added.
 * @returns {Promise<Object>} - A promise containing the added task object.
 */
export const addTask = async (task: any) => {
  const response = await axios.post(baseUrl, task); // Making a POST request with the task object
  return response.data; // Returning the data from the response
}

/**
 * Deletes a task from the server by its ID.
 * @param {number} id - The ID of the task to be deleted.
 * @returns {Promise<Object>} - A promise containing the deleted task object.
 */
export const deleteTask = async (id: number) => {
  const response = await axios.delete(`${baseUrl}/${id}`); // Making a DELETE request to a specific task's URL
  return response.data; // Returning the data from the response
}

/**
 * Updates an existing task on the server.
 * @param {Object} task - The updated task object.
 * @returns {Promise<Object>} - A promise containing the updated task object.
 */
export const updateTask = async (task: any) => {
  const response = await axios.put(`${baseUrl}/${task.id}`, task); // Making a PUT request to update a task
  return response.data; // Returning the data from the response
}
