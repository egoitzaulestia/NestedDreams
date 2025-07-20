import { Link, useParams } from 'react-router-dom'
import { MoveLeft, ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext/CartContext'
import { useState } from 'react'
import { mockProducts } from '../components/MockProducts'
import '../assets/styles/layout/_productDetail.scss'

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart } = useCart();

    const [showMessage, setShowMessage] = useState(false);

    const product = mockProducts.find(p => p.id === id);

    if (!product) {
        return (
            <div className="product-detail-page">
                <div className="product-detail-container">
                    <div className="product-detail-page__not-found">
                        <h2>Product not found in this layer</h2>
                        <Link to='/products' className="back-btn">
                            <MoveLeft size={20} />
                            Return to Products
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart(product);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">
                <Link to='/products' className="product-detail-page__back-link">
                    <MoveLeft size={20} />
                    <span>Back to Products</span>
                </Link>

                <div className="product-detail-page__content">
                    <div className="product-detail-page__image">
                        <img src={product.image} alt={product.name} />
                    </div>

                    <div className="product-detail-page__info">
                        <div className="product-detail-page__header">
                            <h1>{product.name}</h1>
                            <p>{product.description}</p>
                        </div>

                        <div className="product-detail-page__price">
                            ${product.price}
                        </div>

                        <div className="product-detail-page__actions">
                            <button onClick={handleAddToCart} className="add-to-cart-btn">
                                <ShoppingCart size={20} />
                                <span>Add to Cart</span>
                            </button>

                            {showMessage && (
                                <div className="success-message">
                                    Product added to cart successfully!
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail