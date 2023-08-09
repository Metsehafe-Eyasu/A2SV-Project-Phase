import styles from '../styles/Layout.module.css'; // Importing CSS module for styling
import Header from './Header'; // Importing the Header component
import Nav from './Nav'; // Importing the Nav component

interface LayoutProps {
  children: React.ReactNode; // Defining props interface with children of type React.ReactNode
}

/**
 * Layout Component - Wraps content with header, navigation, and styling.
 * @param {LayoutProps} children - The child components to be wrapped.
 * @returns {JSX.Element} - The rendered Layout component.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    // Wrapping content with navigation, header, and container styling
    <>
      <Nav /> {/* Rendering the Nav component */}
      <Header /> {/* Rendering the Header component */}
      <div className={styles.container}>
        <main className={styles.main}>
          {children} {/* Rendering the child components */}
        </main>
      </div>
    </>
  );
}

export default Layout; // Exporting the Layout component as the default export
