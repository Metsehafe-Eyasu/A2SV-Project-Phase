import popupStyles from '../styles/Popup.module.css';

interface PopupProps {
  message: string;
  type: string;
}

const Popup : React.FC<PopupProps> = ({message, type}) => {
  return (
    <div className={`${popupStyles.popup}`}>
      <div className={`${popupStyles.message} ${type === "success" ? popupStyles.message_success : popupStyles.message_error}`}>
        {message}
      </div>
    </div>
  )
};

export default Popup;
