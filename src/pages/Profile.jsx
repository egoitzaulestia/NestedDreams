import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const Profile = () => {
  const { user, token } = useContext(UserContext);
  const [stats, setStats] = useState({
    orders: 0,
    favorites: 0,
    joinedDays: 0,
  });

  // ── Fetch dynamic counts ──
  useEffect(() => {
    if (!user || !token) return;

    const fetchStats = async () => {
      try {
        const [ordersRes, favsRes] = await Promise.all([
          fetch("/api/orders/count", {
            headers: { Authorization: token },
          }).then((r) => r.json()),
          fetch("/api/favorites/count", {
            headers: { Authorization: token },
          }).then((r) => r.json()),
        ]);

        const created = new Date(user.createdAt);
        const now = new Date();
        const diffDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));

        setStats({
          orders: ordersRes.count,
          favorites: favsRes.count,
          joinedDays: diffDays,
        });
      } catch (err) {
        console.error("Failed to load stats", err);
      }
    };

    fetchStats();
  }, [user, token]);

  // ── Guard clause ──
  if (!user) {
    return (
      <div className="profile__empty">
        <h2 className="profile__empty-title">
          Please sign in to view your profile
        </h2>
      </div>
    );
  }

  // ── Render ──
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
            <div className="stats-grid__item">
              <Package size={24} />
              <div className="stats-grid__num">{stats.orders}</div>
              <div className="stats-grid__label">Total Orders</div>
            </div>
            <div className="stats-grid__item">
              <Heart size={24} />
              <div className="stats-grid__num">{stats.favorites}</div>
              <div className="stats-grid__label">Favorites</div>
            </div>
            <div className="stats-grid__item">
              <Layers size={24} />
              <div className="stats-grid__num">
                {stats.joinedDays < 7
                  ? "New"
                  : `${Math.floor(stats.joinedDays / 30)} mo`}
              </div>
              <div className="stats-grid__label">Member Status</div>
            </div>
            <div className="stats-grid__item">
              <Layers size={24} />
              <div className="stats-grid__num">{user.layersUnlocked || 1}</div>
              <div className="stats-grid__label">Layers Unlocked</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
