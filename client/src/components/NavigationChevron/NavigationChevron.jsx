import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import chevronDown from "../../assets/images/icon/chevron-down.svg";
import chevronUp from "../../assets/images/icon/chevron-up.svg";
import ChevronButton from "../ChevronButton/ChevronButton";

function NavigationChevron({ route, isUp }) {
  const navigate = useNavigate();

  const handleRedirection = () => {
    if (isUp) {
      window.scrollTo({ top: 0 });
      navigate(window.location.pathname, { replace: true });
    } else {
      navigate(route);
    }
  };

  const chevronSrc = isUp ? chevronUp : chevronDown;
  const buttonRole = isUp
    ? "Remonter en haut de la page"
    : "Descendre vers la section suivante";

  return (
    <ChevronButton
      onClick={handleRedirection}
      src={chevronSrc}
      buttonRole={buttonRole}
    />
  );
}

NavigationChevron.propTypes = {
  route: PropTypes.string,
  isUp: PropTypes.bool,
};

NavigationChevron.defaultProps = {
  route: "",
  isUp: false,
};

export default NavigationChevron;
