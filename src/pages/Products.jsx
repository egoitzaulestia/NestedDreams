import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";
import "../assets/styles/layout/_products.scss";
import { mockProducts } from "../components/MockProducts";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = mockProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(term.toLowerCase()) ||
        product.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`${product.name} added to your dream collection!`);
  };

  return (
    <div className="products-page text-white">
      {/* Header */}
      <div className="header-section">
        <h1 className="header-title">Explore the Layers</h1>
        <p className="header-description">
          Each product opens a new dimension of possibility. Choose your gateway
          into the nested dreams.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4 px-4">
        <div className="relative flex-2">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50"
            size={18}
          />
          <input
            type="text"
            placeholder="Search through the layers..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-10 py-2 w-full rounded bg-white/10 border border-white/20 text-white placeholder:text-white/50"
          />
        </div>
        <button className="border border-white/20 text-white px-4 py-2 rounded flex items-center">
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* Product Grid */}
      <div className="card-section">
        <div className="card-row">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="card-title">{product.name}</h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm text-white/80">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <p className="card-description">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  <div className="flex space-x-2">
                    <Link to={`/products/${product.id}`}>
                      <button className="body-button text-sm flex">
                        Explore
                      </button>
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="body-button text-sm flex items-center"
                    >
                      <ShoppingCart size={13} />
                      Add
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold mb-4 text-white">
              No dreams found in this layer
            </h3>
            <p className="text-white/70 mb-6">
              Try adjusting your search to discover new possibilities.
            </p>
            <button
              onClick={() => handleSearch("")}
              className="body-button text-white"
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
