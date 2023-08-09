import Layout from '@/components/Layout'; // Importing the Layout component
import type { AppProps } from 'next/app'; // Importing the AppProps type from Next.js
import '@/styles/globals.css'; // Importing global styles

/**
 * App Component - The top-level component that wraps all pages.
 * @param {AppProps} param0 - Props for the App component.
 * @returns {JSX.Element} - The rendered App component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrapping the entire app with the Layout component
    <Layout>
      {/* Rendering the current page's component with its props */}
      <Component {...pageProps} />
    </Layout>
  );
}
