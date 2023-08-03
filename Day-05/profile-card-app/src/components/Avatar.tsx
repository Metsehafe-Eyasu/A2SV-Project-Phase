/**
 * @file Avatar.tsx
 * @desc Avatar component - Displays the user's avatar image.
 */

import React from 'react'

/**
 * Interface for the Avatar component props.
 */
interface AvatarProps {
  avatarURL: string
}

/**
 * Avatar component displays the user's avatar image.
 * @param {AvatarProps} props - The props for the Avatar component.
 * @returns {JSX.Element} - The rendered Avatar component.
 */
const Avatar: React.FC<AvatarProps> = ({ avatarURL }) => {
  return (
    <div className='avatar'>
      <img src={avatarURL} alt='avatar' />
    </div>
  )
}

export default Avatar
