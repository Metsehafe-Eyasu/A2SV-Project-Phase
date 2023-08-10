import React from "react"; // Importing React from 'react'
import { filterAction } from "../reducers/filterReducer"; // Importing filterAction from filterReducer
import { useDispatch } from "react-redux"; // Importing useDispatch from 'react-redux'

/**
 * Filter Component - Renders a filter dropdown for task statuses.
 * @returns {JSX.Element} - The rendered Filter component.
 */
const Filter = () => {
  const dispatch = useDispatch(); // Using useDispatch from react-redux

  /**
   * Handles filter selection change.
   * Dispatches action to update the filter in Redux state based on the selected value.
   * @param {React.ChangeEvent<HTMLSelectElement>} e - The select element's change event.
   */
  const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filterAction(e.target.value)); // Dispatching filterAction with selected value
  };

  return (
    <div>
      <select className="p-2 mt-4 w-96 my-1 rounded-lg text-center" onChange={handleFilter}>
        <option value="ALL" selected>All</option>
        <option value="COMPLETED">Completed</option>
        <option value="PENDING">Pending</option>
      </select>
    </div>
  );
}

export default Filter; // Exporting the Filter component as the default export
