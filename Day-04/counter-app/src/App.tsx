/**
 * @file App.tsx
 * @desc App component - Main component that renders the Counter App.
 */

import Footer from './components/Footer';
import Counter from './components/Counter';
import './App.css';

/**
 * App component is the main component that renders the Counter App.
 * @returns {JSX.Element} - The rendered App component.
 */
function App() {
  return (
    <div className='app'>
      {/* Header */}
      <h1>Counter App</h1>

      {/* Render the Counter component */}
      <Counter />

      {/* Render the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
