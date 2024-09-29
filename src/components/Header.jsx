import PropTypes from "prop-types";
import "../styles/Header.css";

function Header({ text }) {
  return (
    <header>
      <div className="header">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
