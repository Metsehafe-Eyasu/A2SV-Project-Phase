import type { NextApiRequest, NextApiResponse } from 'next'
import { Article } from '@/types';
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  const articles = await axios.get('http://localhost:3001/articles')
  const articlesJson = articles.data
  res.status(200).json(articlesJson)
}
