import { useCart } from '../components/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartItems, removeFromCart } = useCart();

    return (
        <section className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Go back to shopping</Link></p>
            ) : (
                <div className="cart-items flex column-direction">
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item flex">
                            <img
                                className="cart-item-img"
                                src={item.image}
                                alt={item.title}
                            />
                            <div className="cart-item-details">
                                <h4>{item.title}</h4>
                                <p><strong>Price:</strong> ${item.price}</p>
                                <p><strong>Quantity:</strong> {item.quantity}</p>
                                <button
                                    className="remove-button"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total">
                        <p>
                            <strong>Total:</strong> $
                            {cartItems
                                .reduce((total, item) => total + item.price * item.quantity, 0)
                                .toFixed(2)}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Cart;