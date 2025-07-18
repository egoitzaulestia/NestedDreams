import { Link } from "react-router-dom";
import { Twitter, Instagram, Mail } from "lucide-react";
import "../assets/styles/layout/_footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="brand-section">
            <Link to="/" className="brand">
              <div className="logo-box">
                <span>ND</span>
              </div>
              <span className="brand-name">NestedDreams</span>
            </Link>
            <p className="footer-description">
              Dreams within dreams, ideas within ideas. Discover infinite layers
              of possibility.
            </p>
          </div>

          <div className="footer-div-container">
            <span>Explore</span>
            <Link to="/products" className="footer-link">
              <span>Products</span>
            </Link>
            <Link to="/cart" className="footer-link">
              <span>Cart</span>
            </Link>
          </div>

          <div className="footer-div-container">
            <span>Account</span>
            <Link to="/login" className="footer-link">
              <span>Sign In</span>
            </Link>
            <Link to="/profile" className="footer-link">
              <span>Profile</span>
            </Link>
          </div>

          <div className="footer-div-container">
            <span>Connect</span>
            <Link className="footer-link">
              <Twitter />
            </Link>
            <Link className="footer-link">
              <Instagram />
            </Link>
            <Link className="footer-link">
              <Mail />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
