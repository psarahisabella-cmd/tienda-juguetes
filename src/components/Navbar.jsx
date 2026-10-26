import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        🧸 ToyLandia
      </Link>
      <nav className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
          Catálogo
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
          Nosotros
        </NavLink>
        <NavLink to="/cart" className="cart-btn">
          🛒 Carrito
          <span className="badge">{totalItems}</span>
        </NavLink>
      </nav>
    </header>
  );
};
