import type { NextApiRequest, NextApiResponse } from 'next'; // Importing types from Next.js for API handling
import { Article } from '@/types'; // Importing custom Article type
import axios from 'axios'; // Importing axios for making HTTP requests

/**
 * API Handler Function - Handles requests to retrieve all articles.
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse<Article[]>} res - The response object.
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  // Fetching all articles data from a server using axios
  const articles = await axios.get('http://localhost:3001/articles');
  const articlesJson = articles.data;
  
  // Sending the fetched articles data as a JSON response
  res.status(200).json(articlesJson);
}
