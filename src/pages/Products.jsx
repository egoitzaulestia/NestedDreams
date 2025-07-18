import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Star, ShoppingCart } from "lucide-react";
import "../assets/styles/layout/_products.scss"; // assuming you move your SCSS into this file

// Mock product data
const mockProducts = [
  {
    id: "1",
    name: "Inception Starter Kit",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
    rating: 4.8,
    description:
      "Begin your journey into nested realities with this carefully curated starter collection.",
  },
  {
    id: "2",
    name: "Dream Layer Amplifier",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
    rating: 4.9,
    description:
      "Enhance your perception and unlock deeper layers of the NestedDreams experience.",
  },
  {
    id: "3",
    name: "Neural Pathway Mapper",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
    rating: 4.7,
    description:
      "Visualize and navigate the complex networks of your subconscious explorations.",
  },
  {
    id: "4",
    name: "Matryoshka Memory Box",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400",
    rating: 5.0,
    description:
      "Store infinite layers of memories and experiences in this quantum storage solution.",
  },
  {
    id: "5",
    name: "Consciousness Compass",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
    rating: 4.6,
    description:
      "Navigate the labyrinth of nested consciousness with precision and clarity.",
  },
  {
    id: "6",
    name: "Reality Decoder Ring",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
    rating: 4.5,
    description:
      "Decrypt the hidden messages embedded in each layer of your dream experience.",
  },
];

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
      <div className="flex flex-col md:flex-row gap-4 mb-8 px-4">
        <div className="relative flex-1">
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
        <button className="border border-white/20 text-white hover:bg-white/10 px-4 py-2 rounded flex items-center">
          <Filter size={18} className="mr-2" />
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
                <div className="flex items-center justify-between mb-2">
                  <h3 className="card-title">{product.name}</h3>
                  <div className="flex items-center space-x-1 text-yellow-400">
                    <Star size={16} fill="currentColor" />
                    <span className="text-sm text-white/80">
                      {product.rating}
                    </span>
                  </div>
                </div>
                <p className="card-description">{product.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  <div className="flex space-x-2">
                    <Link to={`/products/${product.id}`}>
                      <button className="body-button text-sm">Explore</button>
                    </Link>
                    <button
                      onClick={() => addToCart(product)}
                      className="body-button text-sm flex items-center"
                    >
                      <ShoppingCart size={16} className="mr-1" />
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
