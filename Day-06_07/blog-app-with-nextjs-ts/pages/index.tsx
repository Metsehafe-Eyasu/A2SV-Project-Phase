import Head from 'next/head'; // Importing the 'Head' component from Next.js for document metadata
import { Article, ArticleListProps } from '@/types'; // Importing types related to articles
import ArticleList from '@/components/ArticleList'; // Importing the 'ArticleList' component
import { server } from '@/config'; // Importing server configuration

/**
 * Home component - The main component for the home page.
 * @param {ArticleListProps} props - Props containing the list of articles.
 * @returns {JSX.Element} - The rendered Home component.
 */
const Home: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <>
      {/* Setting document metadata using the 'Head' component */}
      <Head>
        <title>Insomniac Blogs</title>
        <meta name="description" content="Stay in touch with the gaming world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Rendering the ArticleList component with the provided articles */}
      <ArticleList articles={articles} />
    </>
  );
};

/**
 * Fetches the static props for the Home component.
 * @returns {Promise} - The props containing the fetched articles.
 */
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`); // Fetching articles from the server
  const articles: Article[] = await res.json(); // Parsing the fetched JSON response
  return {
    props: { articles } // Passing fetched articles as props
  };
};

export default Home; // Exporting the Home component as the default export
