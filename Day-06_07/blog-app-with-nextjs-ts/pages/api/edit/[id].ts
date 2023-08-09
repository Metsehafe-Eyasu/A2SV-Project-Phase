import type { NextApiRequest, NextApiResponse } from 'next'; // Importing types from Next.js for API handling
import { Article, Data } from '@/types'; // Importing custom types
import axios from 'axios'; // Importing axios for making HTTP requests

/**
 * API Handler Function - Handles requests to update an article by ID.
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse<Article[] | Data>} res - The response object.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[] | Data>
) {
  const id = req.query.id; // Extracting the 'id' parameter from the request
  try {
    // Making a PUT request to update an article by ID using the provided request body
    await axios.put(`http://localhost:3001/articles/${id}`, req.body);
    res.status(200).end(); // Responding with a success status code (200)
  } catch (err) {
    // Handling errors by responding with an error status code (500) and an error message
    res.status(500).json({ message: err.message });
  }
}
