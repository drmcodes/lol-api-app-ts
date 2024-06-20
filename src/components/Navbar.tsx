import "../App.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <img src="/src/img/favicon.ico" alt="" />
          <p>
            <a href="http://localhost:5173/">CHAMPION FORGE</a>
          </p>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <a href="http://localhost:5173/champions">Champions</a>
          </li>
          <li className="menu-item">
            <a href="http://localhost:5173/items">Items</a>
          </li>
          <li className="menu-item">
            <a href="http://localhost:5173/runes">Runes</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
