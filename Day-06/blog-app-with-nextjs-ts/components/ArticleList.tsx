import ArticleItem from "@/components/ArticleItem"; // Importing the ArticleItem component
import articleStyles from "@/styles/Article.module.css"; // Importing CSS module for styling
import { ArticleListProps } from "@/types"; // Importing custom ArticleListProps type

/**
 * ArticleList Component - Renders a list of articles using ArticleItem components.
 * @param {ArticleListProps} articles - The list of articles as props.
 * @returns {JSX.Element} - The rendered ArticleList component.
 */
const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    // Rendering a list of articles with a CSS grid layout
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        // Rendering each article using the ArticleItem component
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList; // Exporting the ArticleList component as the default export
