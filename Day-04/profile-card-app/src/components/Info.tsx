/**
 * @file Info.tsx
 * @desc Info component - Displays user information like name, bio, and website.
 */

import React from "react";

/**
 * Interface for the Info component props.
 */
interface InfoProps {
  name: string;
  bio: string;
  website?: string;
}

/**
 * Info component displays user information like name, bio, and website.
 * @param {InfoProps} props - The props for the Info component.
 * @returns {JSX.Element} - The rendered Info component.
 */
const Info: React.FC<InfoProps> = ({ name, bio, website }) => {
  return (
    <div className="info">
      <h2>{name}</h2>
      <p>{bio}</p>
      {/* The website link will only be rendered if `website` prop is truthy */}
      {website && <a href={website}>Go to Website</a>}
    </div>
  );
};

export default Info;
