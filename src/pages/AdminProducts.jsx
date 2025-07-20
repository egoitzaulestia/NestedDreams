import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext/UserContext";
import { Shield, SquarePen, Trash2, Plus, Loader2, AlertCircle } from "lucide-react";
import "../assets/styles/layout/_adminProducts.scss";

const API_URL = "http://localhost:3000";

const AdminProducts = () => {
  const { user, token } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(null);

  // Fetch all products on mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${API_URL}/products`, {
          headers: { authorization: token },
        });
        setProducts(res.data);
      } catch (err) {
        console.error(err);
        setError("Could not load products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [token]);

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) {
      return;
    }

    setDeleteLoading(productId);
    try {
      await axios.delete(`${API_URL}/products/id/${productId}`, {
        headers: { authorization: token },
      });
      setProducts(products.filter(p => p.id !== productId));
    } catch (err) {
      console.error("Failed to delete product:", err);
      alert("Failed to delete product");
    } finally {
      setDeleteLoading(null);
    }
  };

  // We redirect non-admin
  if (!user || (user.RoleId !== 2 && user.RoleId !== 3)) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <div className="admin-page__unauthorized">
            <AlertCircle size={48} />
            <h2>Access Denied</h2>
            <p>You must be an Admin or Superadmin to view this page.</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <div className="admin-page__loading">
            <Loader2 size={48} className="loading-spinner" />
            <p>Loading products...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <div className="admin-page__error">
            <AlertCircle size={48} />
            <h2>Error</h2>
            <p>{error}</p>
            <button onClick={() => window.location.reload()} className="retry-btn">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-container">
        <header className="admin-page__header">
          <div className="admin-page__title">
            <Shield size={32} />
            <h1>Admin Panel</h1>
          </div>
          <p className="admin-page__subtitle">Manage your products inventory</p>
          <Link to="/admin/products/new" className="add-product-btn">
            <Plus size={20} />
            <span>Add Product</span>
          </Link>
        </header>

        <div className="admin-page__content">
          {products.length === 0 ? (
            <div className="admin-page__empty">
              <Shield size={64} />
              <h2>No Products Found</h2>
              <p>Start by adding your first product to the inventory.</p>
              <Link to="/admin/products/new" className="add-first-product-btn">
                <Plus size={20} />
                <span>Add Your First Product</span>
              </Link>
            </div>
          ) : (
            <div className="products-table">
              <table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="product-cell">
                        <img src={product.imageUrl} alt={product.name} />
                        <div className="product-info">
                          <strong>{product.name}</strong>
                          <p>{product.description}</p>
                        </div>
                      </td>
                      <td className="price-cell">€{product.price}</td>
                      <td className="stock-cell">
                        <span className={`stock-badge ${product.stock < 10 ? 'low' : 'normal'}`}>
                          {product.stock}
                        </span>
                      </td>
                      <td className="actions-cell">
                        <Link to={`/admin/products/${product.id}/edit`} className="edit-btn">
                          <SquarePen size={18} />
                          <span>Edit</span>
                        </Link>
                        <button
                          onClick={() => handleDelete(product.id)}
                          className="delete-btn"
                          disabled={deleteLoading === product.id}
                        >
                          {deleteLoading === product.id ? (
                            <Loader2 size={18} className="loading-spinner" />
                          ) : (
                            <Trash2 size={18} />
                          )}
                          <span>Delete</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
