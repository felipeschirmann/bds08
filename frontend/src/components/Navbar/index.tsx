import "./style.css";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-primary">
      <Link to="/">
        <h3>Github API</h3>
      </Link>
    </nav>
  );
}

export default Navbar;
