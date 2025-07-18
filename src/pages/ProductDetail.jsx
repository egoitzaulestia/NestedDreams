import { Link, useParams } from 'react-router-dom'
import { MoveLeft, ShoppingCart } from 'lucide-react'
import { useCart } from '../contexts/CartContext'
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
            <MoveLeft />
            <Link to='/products'>
                <button>
                    Return to products
                </button>
            </Link>

            <section>
                <img src={product.image} alt={product.name} />
            </section>

            <section>
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                </div>

                <div>${product.price}</div>

                <div>
                    <button onClick={handleAddToCart}
                        disabled={!product.inStock}>
                        <ShoppingCart />
                        {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>

                    {showMessage && (
                        <p>
                            Product added to cart.
                        </p>
                    )}
                </div>
            </section>

            <section>
                <h2>About this layer</h2>
                <p>{product.fullDescription}</p>
                <p>{product.features}</p>
            </section>
        </div>
    )
}

export default ProductDetail


    // < Link to = {`/product-detail/${product.id}`}>
    //     <button className="product-button">View Details</button>
    //         </ >