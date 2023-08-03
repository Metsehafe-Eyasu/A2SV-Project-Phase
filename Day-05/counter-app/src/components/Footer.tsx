/**
 * @file Footer.tsx
 * @desc Footer component - Displays the footer section with creator information.
 */

import React from 'react';

/**
 * Footer component displays the footer section with creator information.
 * @returns {JSX.Element} - The rendered Footer component.
 */
const Footer: React.FC = () => {
  return (
    <div className='footer'>
      {/* Information about the creator */}
      <p>Created by Metsehafe</p>
    </div>
  );
};

export default Footer;
