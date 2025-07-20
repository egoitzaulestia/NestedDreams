import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext/CartContext';
import '../assets/styles/layout/_cart.scss'

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const hasProducts = cartItems.length > 0;

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const cartItemsList = cartItems.map((product) => (
    <div key={product.id} className="cart-page__item">
      <img src={product.image} alt={product.name} />
      <div className="cart-page__item-info">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <span className="quantity">Quantity: {product.quantity}</span>
      </div>
      <div className="cart-page__item-price">
        ${(product.price * product.quantity).toFixed(2)}
      </div>
      <button 
        onClick={() => removeFromCart(product.id)} 
        className="cart-page__item-remove"
      >
        <Trash2 size={20} />
      </button>
    </div>
  ));

  const emptyCart = (
    <div className="cart-page__empty">
      <ShoppingBag className="empty-icon" size={64} />
      <h2>Your cart is empty</h2>
      <p>
        Start exploring the layers to discover products that will transform your journey.
      </p>
      <Link to="/products" className="explore-btn">
        Explore Products
        <ArrowRight size={20} />
      </Link>
    </div>
  );

  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-page__header">
          <h1>Shopping Cart</h1>
          <p>Review your selected items and proceed to checkout</p>
        </div>

        {hasProducts ? (
          <div className="cart-page__content">
            <div className="cart-page__items">
              {cartItemsList}
            </div>
            
            <div className="cart-page__summary">
              <h2>Order Summary</h2>
              
              <div className="cart-page__summary-item">
                <span>Subtotal ({cartItems.length} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="cart-page__summary-item">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              
              <div className="cart-page__summary-item">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              
              <div className="cart-page__summary-total">
                <button className="checkout-btn">
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          emptyCart
        )}
      </div>
    </div>
  );
};

export default Cart;