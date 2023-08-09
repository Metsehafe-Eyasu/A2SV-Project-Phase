import headerStyles from '../styles/Header.module.css'; // Importing CSS module for styling

/**
 * Header Component - Renders the header with a title and description.
 * @returns {JSX.Element} - The rendered Header component.
 */
const Header: React.FC = () => {
  return (
    // Rendering the header with a title and description
    <div>
      <h1 className={headerStyles.title}>
        <span>Insomniac</span> Blogs
      </h1>
      <p className={headerStyles.description}>
        Stay in touch with the gaming world
      </p>
    </div>
  );
}

export default Header; // Exporting the Header component as the default export
