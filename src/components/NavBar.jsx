import "../assets/styles/layout/_navbar.scss";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { House, Package, ShoppingCart } from "lucide-react";

import { UserContext } from "../context/UserContext/UserState";

const NavBar = () => {
  const navigate = useNavigate();
  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="flex-row-between">
          <Link to="/" className="brand">
            <div className="logo-box">
              <span>ND</span>
            </div>
            <span className="brand-name">NestedDreams</span>
          </Link>
          <div className="div-container">
            <Link to="/" className="nav-link">
              <House size={18} />
              <span>Home</span>
            </Link>
            <Link to="/products" className="nav-link">
              <Package size={18} />
              <span>Products</span>
            </Link>
            <Link to="/cart" className="cart-link">
              <ShoppingCart size={20} />
              {/* {itemCount > 0 && (
                                <span className="item-count">{itemCount}</span>
                            )} */}
            </Link>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
