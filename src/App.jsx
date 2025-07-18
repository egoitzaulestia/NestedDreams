import "./App.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import CheckEmail from "./pages/CheckEmail";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Confirm from "./pages/Confirm";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./context/UserContext/UserState";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/check-email" element={<CheckEmail />} />
            <Route path="/confirm/:emailToken" element={<Confirm />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
