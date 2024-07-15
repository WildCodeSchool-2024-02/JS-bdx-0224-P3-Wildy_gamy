import PropTypes from "prop-types";
import "./ChevronButton.scss";

function ChevronButton({ onClick, src, buttonRole }) {
  return (
    <button type="button" onClick={onClick} className="chevron-button">
      <img src={src} alt={buttonRole} title={buttonRole} />
    </button>
  );
}

ChevronButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  buttonRole: PropTypes.string.isRequired,
};

export default ChevronButton;
