import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext/UserContext";
import {
  User as UserIcon,
  Mail,
  Shield,
  Package,
  Heart,
  Layers,
  Settings,
} from "lucide-react";
import "../assets/styles/layout/_profile.scss";

const API_URL = "http://localhost:3000";

const Profile = () => {
  const { user, token } = useContext(UserContext);
  const [stats, setStats] = useState({
    orders: 0,
    favorites: 0,
    joinedDays: 0,
  });

  useEffect(() => {
    if (!token) return;

    const fetchStats = async () => {
      try {
        // We fetch the user orders
        const res = await axios.get(`${API_URL}/users/with-orders`, {
          headers: { authorization: token },
        });

        // We count how many orders
        const ordersCount = Array.isArray(res.data.orders)
          ? res.data.orders.length
          : 0;

        const createdAt = new Date(res.data.createdAt);
        const now = Date.now();
        const joinedDays = Math.floor((now - createdAt) / (1000 * 60 * 24));

        setStats({
          orders: ordersCount,
          favorites: 0,
          joinedDays,
        });
      } catch (err) {
        console.error("Failed to load stats", err);
      }
    };

    fetchStats();
  }, [token]);

  if (!user) {
    return (
      <div className="profile__empty">
        <h2 className="profile__empty-title">
          Please sign in to view your profile
        </h2>
      </div>
    );
  }

  return (
    <div className="profile">
      <h1 className="profile__heading">Your Profile</h1>
      <div className="profile__grid">
        {/* Profile Info */}
        <section className="profile-card profile-card--info">
          <header className="profile-card__header">
            <UserIcon
              className="profile-card__icon"
              size={23}
              strokeWidth={2}
            />
            <h2 className="profile-card__title">Profile Information</h2>
          </header>
          <div className="profile-card__body">
            <div className="profile-card__user">
              <div className="profile-card__avatar">
                <UserIcon size={34} strokeWidth={1.5} />
              </div>
              <div className="profile-card__info-detail">
                <h3 className="profile-card__name">{user.name}</h3>
                <p className="profile-card__email">{user.email}</p>
              </div>
            </div>
            <ul className="profile-card__details">
              <li>
                <Mail size={16} className="detail-icon" />
                Email: {user.email}
              </li>
              <li>
                <Shield size={16} className="detail-icon" />
                Role: {user.role || "User"}
              </li>
            </ul>
            <Link to="/profile/edit" className="profile-card__btn">
              <Settings size={16} className="btn-icon" />
              Edit Profile
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="profile-card profile-card--stats">
          <header className="profile-card__header">
            <Package className="profile-card__icon" size={23} strokeWidth={2} />
            <h2 className="profile-card__title">Account Overview</h2>
          </header>
          <div className="profile-card__body stats-grid">
            {[
              {
                icon: <Package size={24} />,
                num: stats.orders,
                label: "Total Orders",
              },
              {
                icon: <Heart size={24} />,
                num: stats.favorites,
                label: "Favorites",
              },
              {
                icon: <Layers size={24} />,
                num:
                  stats.joinedDays < 7
                    ? "New"
                    : `${Math.floor(stats.joinedDays / 30)} mo`,
                label: "Member Status",
              },
              {
                icon: <Layers size={24} />,
                num: user.layersUnlocked || 1,
                label: "Layers Unlocked",
              },
            ].map(({ icon, num, label }, i) => (
              <div key={i} className="stats-grid__item">
                {icon}
                <div className="stats-grid__num">{num}</div>
                <div className="stats-grid__label">{label}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
