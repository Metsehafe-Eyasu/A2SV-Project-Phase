/**
 * @file Counter.tsx
 * @desc Counter component - Displays a counter with increment and decrement buttons.
 */

import React, { useEffect, useRef, useState } from 'react';

/**
 * Counter component displays a counter with increment and decrement buttons.
 * @returns {JSX.Element} - The rendered Counter component.
 */
const Counter: React.FC = () => {
  // State to manage the counter value
  const [count, setCount] = useState<number>(0);

  // Use useRef to access the DOM button elements
  const incrementButtonRef = useRef<HTMLButtonElement | null>(null);
  const decrementButtonRef = useRef<HTMLButtonElement | null>(null);

  // Use useEffect to update the document title and apply special styles to buttons based on the counter value
  useEffect(() => {
    // Update the document title with the counter value
    document.title = `Counter: ${count}`;

    // Apply special style to the increment button if count is greater than or equal to 5
    if (count >= 5) {
      incrementButtonRef.current?.classList.add('special-button');
    } else {
      incrementButtonRef.current?.classList.remove('special-button');
    }

    // Apply special style to the decrement button if count is less than or equal to -5
    if (count <= -5) {
      decrementButtonRef.current?.classList.add('special-button');
    } else {
      decrementButtonRef.current?.classList.remove('special-button');
    }
  }, [count]);

  // Event handler to increment the counter
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler to decrement the counter
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className='card'>
      {/* Display the current counter value */}
      <h3>Counter: {count}</h3>
      {/* Buttons for incrementing and decrementing the counter */}
      <div className='button-group'>
        <button ref={incrementButtonRef} onClick={handleIncrement}>
          Increment
        </button>
        <button ref={decrementButtonRef} onClick={handleDecrement}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
