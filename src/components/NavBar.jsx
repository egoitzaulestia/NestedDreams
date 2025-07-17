import "../assets/styles/layout/_navbar.scss";

import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { House, Package, ShoppingCart, User } from "lucide-react";

import { UserContext } from "../context/UserContext/UserContext";

const NavBar = () => {
  const location = useLocation();
  const { getUserInfo, user, token, logout } = useContext(UserContext);

  useEffect(() => {
    if (token) {
      getUserInfo();
    }
  }, [token, getUserInfo]);

  const showProfileLinks = token && user && location.pathname !== "/login";

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

            {showProfileLinks ? (
              <>
                <Link to="/profile">
                  <button>
                    <User size={16} />
                    <span> {user.name}</span>
                  </button>
                </Link>
                <Link to="/">
                  <button>Logout</button>
                </Link>
              </>
            ) : (
              <Link to="/login">
                <button>Sign In</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
