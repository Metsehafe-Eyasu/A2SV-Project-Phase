import type { NextApiRequest, NextApiResponse } from 'next'
import { Article, Data } from '@/types';
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[] | Data>
) {
  const id = req.query.id
  try{
    await axios.put(`http://localhost:3001/articles/${id}`, req.body)
    res.status(200).end()
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}
