import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import { FaEdit } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import "../styles/FeedbackItem.css";

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <div className="feedback-item">
      <div className="num">{item.rating}</div>
      <button className="close" onClick={() => deleteFeedback(item.id)}>
        <FaTimes color="red" />
      </button>
      <button className="edit" onClick={() => editFeedback(item)}>
        <FaEdit color="red" />
      </button>
      <div className="text">{item.text}</div>
    </div>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
