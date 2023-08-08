import type { NextApiRequest, NextApiResponse } from 'next'; // Importing types from Next.js for API handling
import { Article, Data } from '@/types'; // Importing custom types
import axios from 'axios'; // Importing axios for making HTTP requests

/**
 * API Handler Function - Handles requests to create an article.
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse<Article[] | Data>} res - The response object.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[] | Data>
) {
  try {
    // Making a POST request to create a new article using the provided request body
    await axios.post('http://localhost:3001/articles', req.body);
    res.status(201).end(); // Responding with a success status code (201)
  } catch (err) {
    // Handling errors by responding with an error status code (500) and an error message
    res.status(500).json({ message: err.message });
  }
}
