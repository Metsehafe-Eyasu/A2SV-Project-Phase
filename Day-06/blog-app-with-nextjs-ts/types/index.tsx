export interface Article {
  id: number | string
  title: string
  body: string
  userId?: number
  excerpt?: string
}

export interface ArticleProps {
  article: Article
}

export interface ArticleListProps {
  articles: Article[]
}