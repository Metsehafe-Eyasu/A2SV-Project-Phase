import navStyles from '../styles/Nav.module.css'; // Importing CSS module for styling
import Link from 'next/link'; // Importing the Link component from Next.js for routing

/**
 * Nav Component - Renders a navigation bar with links.
 * @returns {JSX.Element} - The rendered Nav component.
 */
const Nav: React.FC = () => {
  return (
    // Rendering a navigation bar with links
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/create'>Create</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav; // Exporting the Nav component as the default export
