// import React, { useContext } from "react";
// import { Link } from "react-router-dom";
// // import axios from "axios";
// import { UserContext } from "../context/UserContext/UserContext";
// import {
//   User as UserIcon,
//   Mail,
//   Shield,
//   SquarePen,
//   Package,
//   Heart,
//   Layers,
//   Settings,
// } from "lucide-react";
// import "../assets/styles/layout/_adminProducts.scss";

// const API_URL = "http://localhost:3000";

// const AdminProducts = () => {
//   const { user, token } = useContext(UserContext);

//   if (!user) {
//     return (
//       <div className="admin__empty">
//         <h2 className="admin__empty-title">
//           Please sign in to view your profile
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div className="admin">
//       <h1 className="admin__heading">Admin Panel</h1>
//       <div className="admin__grid">
//         {/* Admin Info */}
//         <section className="admin-card admin-card--info">
//           <header className="admin-card__header">
//             <Shield className="admin-card__icon" size={23} strokeWidth={2} />
//             <h2 className="admin-card__title">Admin Information</h2>
//           </header>
//           <div className="admin-card__body">
//             <div className="admin-card admin-card__body">
//               <div className="admin-card__user">
//                 <div className="admin-card__avatar">
//                   <UserIcon size={34} strokeWidth={1.5} />
//                 </div>
//                 <div className="admin-card__info-detail">
//                   <h3 className="admin-card__name">{user.name}</h3>
//                   <p className="admin-card__email">{user.email}</p>
//                 </div>
//               </div>
//               <ul className="admin-card__details">
//                 <li>
//                   <Mail size={16} className="detail-icon" />
//                   Email: {user.email}
//                 </li>
//                 <li>
//                   <Shield size={16} className="detail-icon" />
//                   Role: {user.role || "User"}
//                 </li>
//               </ul>
//               <Link to="/profile/edit" className="admin-card__btn">
//                 <Settings size={16} className="btn-icon" />
//                 Edit Profile
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default AdminProducts;

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext/UserContext";
import { Shield, SquarePen, Trash2 } from "lucide-react";
import "../assets/styles/layout/_adminProducts.scss";

const API_URL = "http://localhost:3000";

const AdminProducts = () => {
  const { user, token } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // We redirect non-admin
  if (!user || (user.RoleId !== 2 && user.RoleId !== 3)) {
    return (
      <div className="admin__empty">
        <h2 className="admin__empty-title">
          You must be an Admin or Superadmin to view this page.
        </h2>
      </div>
    );
  }

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <section className="admin-product-list">
      <div className="admin-container">
        <header className="admin-product-list__header">
          <h1>
            <Shield /> Admin Panel
          </h1>
          <Link to="admin/products/new" className="btn btn--primary">
            + Add Product
          </Link>
        </header>

        <table className="admin-product-list__table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td className="product-cell">
                  <img src={p.imageUrl} alt={p.name} />
                  <div>
                    <strong>{p.name}</strong>
                    <p>{p.description}</p>
                  </div>
                </td>
                <td>€{p.price}</td>
                <td>{p.stock}</td>
                <td className="actions-cell">
                  <Link to={`/admin/products/${p.id}/edit`}>
                    <SquarePen />
                  </Link>
                  <button
                    onClick={() => {
                      /*TODO: delete*/
                    }}
                  >
                    <Trash2 />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AdminProducts;
