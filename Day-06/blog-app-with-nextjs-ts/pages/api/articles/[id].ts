import type { NextApiRequest, NextApiResponse } from 'next'
import { Article } from '@/types';
import axios from 'axios'

type Data = {
  message: string
}

export default async function handler(
  {query: {id}}: NextApiRequest,
  res: NextApiResponse<Article | Data>
) {
  const articles = await axios.get(`http://localhost:3001/articles/${id}`)
  if (articles.status === 200) {
    const articleJson = articles.data
    res.status(200).json(articleJson)
  } else  {
    res.status(404).json({message: `Article with id ${id} not found`})
  }
}
