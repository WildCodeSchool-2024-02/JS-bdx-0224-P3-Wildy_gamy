import PropTypes from "prop-types";
import "./ChevronButton.scss";

function ChevronButton({ onClick, src, ariaLabel }) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className="chevron-button"
    >
      <img src={src} alt="" />
    </button>
  );
}

ChevronButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
};

export default ChevronButton;
