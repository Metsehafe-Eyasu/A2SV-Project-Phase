import type { NextApiRequest, NextApiResponse } from 'next'
import { Article, Data } from '@/types';
import axios from 'axios'

export default async function handler(
  {query: {id}}: NextApiRequest,
  res: NextApiResponse<Article | Data>
) {
  try {
    await axios.delete(`http://localhost:3001/articles/${id}`)
    res.status(200).end()
  } catch (err) {
    res.status(404).json({message: `Article with id ${id} not found`})
  }
}
