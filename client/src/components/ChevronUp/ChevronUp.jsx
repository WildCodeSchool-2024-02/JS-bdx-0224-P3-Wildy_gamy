import chevronUp from "../../assets/images/icon/chevron-up.svg";

function ChevronUp() {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0 });
  };

  return (
    <button
      type="button"
      aria-label="Remonter en haut de la page"
      onClick={handleScrollUp}
      className="chevron-button"
    >
      <img src={chevronUp} alt="" className="chevron" />
    </button>
  );
}

export default ChevronUp;
