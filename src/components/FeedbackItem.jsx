import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import "../styles/FeedbackItem.css";

function FeedbackItem({ item, handleDelete }) {
  return (
    <div className="feedback-item">
      <div className="num">{item.rating}</div>
      <button className="close" onClick={() => handleDelete(item.id)}>
        <FaTimes color="red" />
      </button>
      <div className="text">{item.text}</div>
    </div>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default FeedbackItem;
