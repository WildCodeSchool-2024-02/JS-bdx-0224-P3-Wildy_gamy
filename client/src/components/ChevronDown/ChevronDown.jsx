import chevronDown from "../../assets/images/icon/chevron-down.svg";

function ChevronDown() {
  const handleScrollDown = () => {
    const nextSection = document.querySelector(".next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ block: "start" });
    }
  };

  return (
    <button
      type="button"
      aria-label="Remonter en haut de la page"
      onClick={handleScrollDown}
      className="chevron-button"
    >
      <img src={chevronDown} alt="" className="chevron" />
    </button>
  );
}

export default ChevronDown;
