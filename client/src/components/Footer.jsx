import { Link } from "react-router-dom";

import homeIcon from "../assets/images/icons8-home.svg"

function Footer() {
  return (
    <>
    <h1>hello</h1>
    <footer>
        <Link to="/">
          <img
            className="homeIcon"
            src={homeIcon}
            alt="icon of the homepage"
          />
          Home
        </Link>
    </footer>
    </>
  )
}

export default Footer