import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import chevronDown from "../../assets/images/icon/chevron-down.svg";
import chevronUp from "../../assets/images/icon/chevron-up.svg";
import "./NavigationChevron.scss";

function NavigationChevron({ route = "", isUp = false }) {
  const navigate = useNavigate();

  const handleRedirection = () => {
    if (isUp) {
      window.scrollTo({ top: 0 });
      navigate(window.location.pathname, { replace: true });
    } else {
      navigate(route);
    }
  };

  return (
    <button
      type="button"
      aria-label={
        isUp
          ? "Remonter en haut de la page"
          : "Descendre vers la section suivante"
      }
      onClick={handleRedirection}
      className="chevron-button"
    >
      <img src={isUp ? chevronUp : chevronDown} alt="" />
    </button>
  );
}

NavigationChevron.propTypes = {
  route: PropTypes.string.isRequired,
  isUp: PropTypes.bool.isRequired,
};

export default NavigationChevron;
