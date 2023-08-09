import type { NextApiRequest, NextApiResponse } from 'next'; // Importing types from Next.js for API handling
import { Article, Data } from '@/types'; // Importing custom types
import axios from 'axios'; // Importing axios for making HTTP requests

/**
 * API Handler Function - Handles requests to delete an article by ID.
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse<Article | Data>} res - The response object.
 */
export default async function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Article | Data>
) {
  try {
    // Making a DELETE request to delete an article by ID
    await axios.delete(`http://localhost:3001/articles/${id}`);
    res.status(200).end(); // Responding with a success status code (200)
  } catch (err) {
    // Handling errors by responding with an error status code (404) and an error message
    res.status(404).json({ message: `Article with id ${id} not found` });
  }
}
