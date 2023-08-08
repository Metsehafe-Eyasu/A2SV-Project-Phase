import type { NextApiRequest, NextApiResponse } from 'next'; // Importing types from Next.js for API handling
import { Article, Data } from '@/types'; // Importing custom types
import axios from 'axios'; // Importing axios for making HTTP requests

/**
 * API Handler Function - Handles requests to retrieve a specific article.
 * @param {NextApiRequest} req - The incoming request object.
 * @param {NextApiResponse<Article | Data>} res - The response object.
 */
export default async function handler(
  { query: { id } }: NextApiRequest,
  res: NextApiResponse<Article | Data>
) {
  // Fetching the article data from a server using axios
  const articles = await axios.get(`http://localhost:3001/articles/${id}`);
  
  // Checking the status of the HTTP response
  if (articles.status === 200) {
    const articleJson = articles.data;
    res.status(200).json(articleJson); // Sending the article data as JSON response
  } else {
    res.status(404).json({ message: `Article with id ${id} not found` }); // Sending error response
  }
}
