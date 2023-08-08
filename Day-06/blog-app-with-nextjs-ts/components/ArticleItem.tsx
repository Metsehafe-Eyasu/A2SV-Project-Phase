import { ArticleProps } from '@/types';
import articleStyle from '../styles/Article.module.css';
import Link from 'next/link';


const ArticleItem : React.FC<ArticleProps> = ({ article }) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`} className={articleStyle.card}>
      <h3>{article.title} &rarr;</h3>
      <p>{article.excerpt}</p>
      <br />
    </Link>
  )
}

export default ArticleItem