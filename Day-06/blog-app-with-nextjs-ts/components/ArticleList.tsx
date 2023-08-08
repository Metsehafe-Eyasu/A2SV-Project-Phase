import ArticleItem from "@/components/ArticleItem";
import articleStyles from "@/styles/Article.module.css";
import { ArticleListProps } from "@/types";

const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem key={article.id} article={article}/>
      ))}
    </div>
  );
};

export default ArticleList;
