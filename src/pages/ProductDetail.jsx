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
            <div>
                <h2>Product not found in this layer</h2>
                <Link to='/products'>
                    <MoveLeft />
                    <button>
                        Return to Products
                    </button>
                </Link>
            </div>
        )
    }

    const handleAddToCart = () => {
        addToCart(product);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };

    return (
        <div>
            <div className='link-container'>
                <Link to='/products' className='header-link'>
                <MoveLeft />
                <p>Return to products</p>
            </Link>
            </div>

            <div className='body-container'>
                <section className='image-container'>
                    <img src={product.image} alt={product.name} />
                </section>

                <section className='text-container'>
                    <div className='text'>
                        <h1>{product.name}</h1>
                        <p>{product.description}</p>
                    </div>

                    <div className='price'>${product.price}</div>

                    <div className='button-container'>
                        <button onClick={handleAddToCart} className='button'>
                            <ShoppingCart />
                            <p>Add to Cart</p>
                        </button>

                        {showMessage && (
                            <p>
                                Product added to cart.
                            </p>
                        )}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default ProductDetail