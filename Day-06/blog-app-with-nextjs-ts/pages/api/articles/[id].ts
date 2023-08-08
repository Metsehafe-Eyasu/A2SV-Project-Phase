import type { NextApiRequest, NextApiResponse } from 'next'
import { Article } from '@/types';

type Data = {
  message: string
}

export default async function handler(
  {query: {id}}: NextApiRequest,
  res: NextApiResponse<Article | Data>
) {
  const articles = await fetch(`http://localhost:3001/articles/${id}`)
  if (articles.ok) {
    const articleJson = await articles.json()
    res.status(200).json(articleJson)
  } else  {
    res.status(404).json({message: `Article with id ${id} not found`})
  }
}
