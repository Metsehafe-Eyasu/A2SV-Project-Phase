import popupStyles from '../styles/Popup.module.css'; // Importing CSS module for styling

interface PopupProps {
  message: string; // Message to be displayed in the popup
  type: string; // Type of the popup, either "success" or "error"
}

/**
 * Popup Component - Renders a popup with a message and styling based on type.
 * @param {PopupProps} message - The message to be displayed.
 * @param {PopupProps} type - The type of the popup ("success" or "error").
 * @returns {JSX.Element} - The rendered Popup component.
 */
const Popup: React.FC<PopupProps> = ({ message, type }) => {
  return (
    // Rendering a popup with appropriate styling based on type
    <div className={`${popupStyles.popup}`}>
      <div className={`${popupStyles.message} ${type === "success" ? popupStyles.message_success : popupStyles.message_error}`}>
        {message} {/* Displaying the message */}
      </div>
    </div>
  );
};

export default Popup; // Exporting the Popup component as the default export
