import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext/CartContext';
import '../assets/styles/layout/_cart.scss'

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const hasProducts = cartItems.length > 0;

  const productList = cartItems.map((product) => (
    <section className="card-section" key={product.id}>
      <div>
        <section className="card">
          <div>
            <h2 className="card-title">{product.name}</h2>
            <p className="card-description">{product.description}</p>
            <span>${product.price.toFixed(2)}</span>
            <p>Quantity: {product.quantity}</p>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
          </div>
        </section>
      </div>
    </section>
  ));

  const emptyMessage = (
    <div className="card-section">
      <section>
        <ShoppingBag />
      </section>
      <h2>Your cart is empty</h2>
      <p className="header-description">
        Start exploring the layers to discover products that will transform your journey.
      </p>
      <Link to="/products" className="header-button-container">
        <button className="header-button">Explore Products</button>
      </Link>
    </div>
  );

  return <div>{hasProducts ? <ul>{productList}</ul> : emptyMessage}</div>;
};

export default Cart;