import { ArticleProps } from '@/types'; // Importing custom ArticleProps type
import articleStyle from '../styles/Article.module.css'; // Importing CSS module for styling
import Link from 'next/link'; // Importing the Link component from Next.js for routing

/**
 * ArticleItem Component - Renders a single article card with a link.
 * @param {ArticleProps} article - The article object as props.
 * @returns {JSX.Element} - The rendered ArticleItem component.
 */
const ArticleItem: React.FC<ArticleProps> = ({ article }) => {
  return (
    // Rendering a link to the detailed article page with associated styles
    <Link href="/article/[id]" as={`/article/${article.id}`} className={articleStyle.card}>
      {/* Displaying article title and excerpt */}
      <h3>{article.title} &rarr;</h3>
      <p>{article.excerpt}</p>
      <br />
    </Link>
  );
}

export default ArticleItem; // Exporting the ArticleItem component as the default export
