import type { NextApiRequest, NextApiResponse } from 'next'
import { Article } from '@/types';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]>
) {
  const articles = await fetch('http://localhost:3001/articles')
  const articlesJson = await articles.json()
  res.status(200).json(articlesJson)
}
