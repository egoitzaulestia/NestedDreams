import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";
import { UserContext } from "../context/UserContext/UserContext";
import {
  User as UserIcon,
  Mail,
  Shield,
  SquarePen,
  Package,
  Heart,
  Layers,
  Settings,
} from "lucide-react";
import "../assets/styles/layout/_adminProducts.scss";

const API_URL = "http://localhost:3000";

const AdminProducts = () => {
  const { user, token } = useContext(UserContext);

  if (!user) {
    return (
      <div className="admin__empty">
        <h2 className="admin__empty-title">
          Please sign in to view your profile
        </h2>
      </div>
    );
  }

  return (
    <div className="admin">
      <h1 className="admin__heading">Admin Panel</h1>
      <div className="admin__grid">
        {/* Admin Info */}
        <section className="admin-card admin-card--info">
          <header className="admin-card__header">
            <Shield className="admin-card__icon" size={23} strokeWidth={2} />
            <h2 className="admin-card__title">Admin Information</h2>
          </header>
          <div className="admin-card__body">
            <div className="admin-card admin-card__body">
              <div className="admin-card__user">
                <div className="admin-card__avatar">
                  <UserIcon size={34} strokeWidth={1.5} />
                </div>
                <div className="admin-card__info-detail">
                  <h3 className="admin-card__name">{user.name}</h3>
                  <p className="admin-card__email">{user.email}</p>
                </div>
              </div>
              <ul className="admin-card__details">
                <li>
                  <Mail size={16} className="detail-icon" />
                  Email: {user.email}
                </li>
                <li>
                  <Shield size={16} className="detail-icon" />
                  Role: {user.role || "User"}
                </li>
              </ul>
              <Link to="/profile/edit" className="admin-card__btn">
                <Settings size={16} className="btn-icon" />
                Edit Profile
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminProducts;
