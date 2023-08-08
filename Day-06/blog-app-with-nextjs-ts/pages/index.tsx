import Head from 'next/head'
import { Article, ArticleListProps } from '@/types'
import ArticleList from '@/components/ArticleList'
import { server } from '@/config'

const Home : React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <>
      <Head>
        <title>Insomniac Blogs</title>
        <meta name="description" content="Stay in touch with the gaming world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ArticleList articles={articles} />
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles : Article[] = await res.json()
  return {
    props: { articles }
  }
}

export default Home