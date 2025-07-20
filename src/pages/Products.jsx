import { useState } from "react";
import { useCart } from "../context/CartContext/CartContext";
import { Link } from "react-router-dom";
import { Search, Filter, Star, ShoppingCart, Check } from "lucide-react";
import "../assets/styles/layout/_products.scss";
import { mockProducts } from "../components/MockProducts";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const { addToCart } = useCart();

  // Individual message states for each product
  const [messageStates, setMessageStates] = useState({});

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    
    // Set message for specific product
    setMessageStates(prev => ({
      ...prev,
      [product.id]: true
    }));
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessageStates(prev => ({
        ...prev,
        [product.id]: false
      }));
    }, 3000);
  };

  return (
    <div className="products-page text-white">
      <div className="products-container">
        {/* Header */}
        <div className="header-section">
          <h1 className="header-title">Explore the Layers</h1>
          <p className="header-description">
            Each product opens a new dimension of possibility. Choose your
            gateway into the nested dreams.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="search-filter-section">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search through the layers..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="search-input"
            />
          </div>
          <button className="filter-button">
            <Filter size={18} />
            <span>Filters</span>
          </button>
        </div>

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-img"
                />
                {messageStates[product.id] && (
                  <div className="success-overlay">
                    <Check size={24} />
                    <span>Added to Cart!</span>
                  </div>
                )}
              </div>
              
              <div className="product-content">
                <div className="product-header">
                  <h3 className="product-title">{product.name}</h3>
                  <div className="rating">
                    <Star size={16} fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                
                <p className="product-description">{product.description}</p>
                
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <div className="product-actions">
                    <Link to={`/product-detail/${product.id}`}>
                      <button className="explore-btn">Explore</button>
                    </Link>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="add-btn"
                    >
                      <ShoppingCart size={16} />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="no-results">
            <h3>No dreams found in this layer</h3>
            <p>Try adjusting your search to discover new possibilities.</p>
            <button
              onClick={() => handleSearch("")}
              className="explore-all-btn"
            >
              Explore All Layers
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
