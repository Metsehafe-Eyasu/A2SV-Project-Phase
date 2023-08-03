/**
 * @file Card.tsx
 * @desc Card component - Represents a user profile card container.
 */

import React from 'react'

/**
 * Interface for the Card component props.
 */
interface CardProps {
  children: React.ReactNode
}

/**
 * Card component represents a user profile card container.
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} - The rendered Card component.
 */
const Card: React.FC<CardProps> = ({ children }) => {
  return <div className='card'>{children}</div>
}

export default Card
