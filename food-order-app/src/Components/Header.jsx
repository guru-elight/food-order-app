import { Link } from "react-router-dom";

const Header = ({ cartCount, total }) => {
  return (
    <header className="header">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
        alt="logo"
        className="logo"
      />

      <nav>
        <Link to="/">Home</Link>

        <a href="/">Help</a>

        <a href="/">Search</a>

        <Link to="/cart" className="cart-info">
          🛒 Cart ({cartCount})
        </Link>

        <span className="cart-total">
          ₹{total}
        </span>
      </nav>
    </header>
  );
};

export default Header;