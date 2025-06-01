import { useCart } from '../components/CartContext';
import card from '../img/Card.png'; 
import { Link } from 'react-router-dom';


function Cart() {
    const { cartItems, removeFromCart } = useCart();

    return (
        <section className="cart-page">
            <h4 className='cart-title'>Your Cart Items</h4>
            {cartItems.length === 0 ? (
                <p>Your cart is empty. <Link to="/">Go back to shopping</Link></p>
            ) : (
                <div className="cart-items flex column-direction">
                    <div className='flex gap-20'>
                        <div className='flex column-direction gap-20 cart-items-container'>
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
                        </div>
                        <div className='aside-container flex column-direction gap-20'>
                            <div className='subtotal-container flex column-direction center'>
                                <h4 className='aside-title'>Subtitle: ${cartItems
                                .reduce((total, item) => total + item.price * item.quantity, 0)
                                .toFixed(2)}</h4>
                                <button>Proceed to checkout</button>
                            </div>
                            <div className='bottom-subtotal-container flex center gap-8'>
                                <figure>
                                    <img src={card} />
                                </figure>
                                <div className='terms-apply'>
                                    <p> Get a $60 Gift Card if approved for the Amazon.ca Rewards Mastercard. Terms apply</p>
                                </div>
                            </div>
                        </div>
                    </div>
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