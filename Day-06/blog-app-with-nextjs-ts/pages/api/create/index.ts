import type { NextApiRequest, NextApiResponse } from 'next'
import { Article, Data } from '@/types';
import axios from 'axios'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Article[]| Data>
) {
  try {
    await axios.post('http://localhost:3001/articles', req.body)
    res.status(201).end()
  } catch (err) {
    res.status(500).json({message: err.message})
  }
}
