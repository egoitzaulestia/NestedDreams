# 🌟 NestedDreams

> **Dreams within dreams, ideas within ideas. Discover infinite layers of possibility.**

A modern e-commerce platform built with React that offers an immersive shopping experience with layered functionality and elegant design.

![NestedDreams Preview](https://img.shields.io/badge/Status-Active-brightgreen)
![React](https://img.shields.io/badge/React-18.0.0-blue)
![Vite](https://img.shields.io/badge/Vite-7.0.4-purple)
![SCSS](https://img.shields.io/badge/SCSS-Styling-orange)

## 🚀 Features

### ✨ User Experience
- **Layered Discovery**: Each interaction reveals deeper functionality
- **Immersive Shopping**: Navigate through curated products with reactive design
- **Mystery Unfolds**: Each visit reveals something new
- **Responsive Design**: Perfect experience across all devices

### 🛍️ E-commerce Features
- **Product Catalog**: Browse through beautifully presented products
- **Shopping Cart**: Seamless cart management with order summary
- **User Authentication**: Secure login and registration system
- **Admin Panel**: Complete product management for administrators
- **Search & Filter**: Find products quickly with advanced search

### 🎨 Design & UI
- **Modern Gradient Design**: Beautiful purple-blue gradient theme
- **Glass Morphism**: Elegant backdrop blur effects
- **Smooth Animations**: Hover effects and transitions
- **Consistent Layout**: Professional spacing and typography

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.0.0 | Frontend Framework |
| **Vite** | 7.0.4 | Build Tool & Dev Server |
| **React Router** | 6.x | Client-side Routing |
| **Axios** | Latest | HTTP Client |
| **SCSS** | Latest | Advanced Styling |
| **Lucide React** | Latest | Icon Library |

## 🔗 Backend API

This frontend application is designed to work with a dedicated backend API:

**[🛒 E-Commerce Backend API](https://github.com/egoitzaulestia/backend-project-one)** - A robust RESTful API built with Node.js, Express, and Sequelize (MySQL) that provides:

- **JWT Authentication** with Bcrypt password hashing
- **Role-based access control** (Admin/User)
- **CRUD Operations** for Products, Categories, Orders, Users
- **Database Relationships** with MySQL and Sequelize
- **Image Uploads** using Multer middleware
- **Product Reviews & Ratings** system
- **Advanced Filtering** and search capabilities

## 📁 Project Structure

```
NestedDreams/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── NavBar.jsx      # Navigation component
│   │   ├── Footer.jsx      # Footer component
│   │   └── MockProducts.jsx # Product data
│   ├── context/            # React Context providers
│   │   ├── CartContext/    # Shopping cart state
│   │   └── UserContext/    # User authentication state
│   ├── pages/              # Application pages
│   │   ├── Home.jsx        # Landing page
│   │   ├── Products.jsx    # Product catalog
│   │   ├── ProductDetail.jsx # Individual product view
│   │   ├── Cart.jsx        # Shopping cart
│   │   ├── Profile.jsx     # User profile
│   │   ├── AdminProducts.jsx # Admin panel
│   │   ├── Login.jsx       # Authentication
│   │   └── Register.jsx    # User registration
│   ├── assets/
│   │   └── styles/         # SCSS styling
│   │       └── layout/     # Page-specific styles
│   └── main.jsx           # Application entry point
├── public/                # Static assets
└── package.json          # Dependencies & scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/NestedDreams.git
   cd NestedDreams
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 🎯 Key Features Explained

### **Layered Discovery**
The platform implements a "matryoshka doll" approach where each interaction reveals deeper functionality, creating an engaging user experience.

### **Admin Panel**
- **Product Management**: Add, edit, and delete products
- **Inventory Control**: Track stock levels with visual indicators
- **User Management**: Admin and superadmin role system
- **Real-time Updates**: Immediate feedback on all actions

### **Shopping Experience**
- **Smart Cart**: Automatic calculations with tax and totals
- **Product Search**: Advanced filtering and search capabilities
- **Responsive Grid**: 3-column layout that adapts to screen size
- **Success Feedback**: Visual confirmation for user actions

## 🎨 Design Philosophy

### **Color Palette**
- **Primary**: Purple gradient (`#9333ea` to `#3b82f6`)
- **Background**: Dark gradient (`#1e1b4b` to `#312e81`)
- **Accent**: Green for success (`#10b981`)
- **Warning**: Red for errors (`#ef4444`)

### **Typography**
- **Headings**: Bold, gradient text with modern styling
- **Body**: Clean, readable fonts with proper hierarchy
- **Interactive**: Hover effects and smooth transitions

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=NestedDreams
```

### Backend Integration
The frontend is designed to work with our dedicated **[E-Commerce Backend API](https://github.com/egoitzaulestia/backend-project-one)**. The backend provides these key endpoints:

- `GET /products` - Fetch all products
- `POST /products` - Create new product (admin)
- `PUT /products/:id` - Update product (admin)
- `DELETE /products/:id` - Delete product (admin)
- `POST /auth/login` - User authentication
- `POST /auth/register` - User registration
- `GET /users/with-orders` - User profile with order history
- `POST /reviews` - Product reviews and ratings

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Use consistent indentation (2 spaces)
- Follow React best practices
- Write meaningful commit messages
- Test your changes thoroughly

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full-featured experience with 3-column layouts
- **Tablet**: Adaptive 2-column layouts
- **Mobile**: Single-column layouts with touch-friendly interactions

## 🔒 Security Features

- **Role-based Access**: Admin and user permissions
- **Protected Routes**: Authentication guards
- **Input Validation**: Form validation and sanitization
- **Secure API Calls**: Token-based authentication

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

## 📊 Performance

- **Lazy Loading**: Components load on demand
- **Optimized Images**: Proper sizing and compression
- **Efficient State Management**: Context API for global state
- **Fast Development**: Vite for rapid development

## 🎉 Team

### Developers
- **[Iker Prieto](https://github.com/IkerPrieto)** - Frontend Developer
- **[Iñaki Míguez](https://github.com/IGNA46img)** - Backend Developer  
- **[Egoitz Aulestia Padilla](https://github.com/egoitzaulestia)** - Project Lead & Full Stack Developer

### Project Components
- **[Frontend Repository](https://github.com/egoitzaulestia/NestedDreams)** - React/Vite E-commerce UI
- **[Backend Repository](https://github.com/egoitzaulestia/backend-project-one)** - Node.js/Express API

### Special Thanks
- TheBridge Full Stack Developer Bootcamp
- React and Vite communities
- All contributors and testers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/egoitzaulestia/NestedDreams/issues) page
2. Create a new issue with detailed information
3. Contact the development team

---

<div align="center">

**Made with ❤️ by the NestedDreams Team**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/your-username/NestedDreams)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>
