import {useShoppingCart} from "../ShoppingCartContext";
import CartItem from "./CartItem";

const ShoppingCart = () => {
    const { cartItems } = useShoppingCart();

    const totalPrice = cartItems.reduce((total, item) => {
        const discount = item.quantity > 3 ? 0.1 * item.price * item.quantity : 0;
        return total + item.price * item.quantity - discount;
    }, 0);

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>You haven't added anything to your shopping cart yet.</p>
            ) : (
                <>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </ul>
                    <h3>Total: ${totalPrice.toFixed(2)}</h3>
                </>
            )}
        </div>
    );
};

export default ShoppingCart;
