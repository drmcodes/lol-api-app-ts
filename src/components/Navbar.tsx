import "../App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/src/img/favicon.ico" alt="" />
          <p>
            <Link to="/">CHAMPION FORGE</Link>
          </p>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <Link to="/champions">Champions</Link>
          </li>
          <li className="menu-item">
            <Link to="/items">Items</Link>
          </li>
          <li className="menu-item">
            <Link to="/runes">Runes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
