import {useShoppingCart} from "../ShoppingCartContext";

const CartItem = ({ item }) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useShoppingCart();

    const discount = item.quantity > 3 ? 0.1 * item.price * item.quantity : 0;
    const itemTotal = item.price * item.quantity - discount;

    return (
        <li style={{ marginBottom: '15px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={`images/${item.image}`} alt={item.name} width='80px' style={{ marginRight: '10px' }}/>
                <div style={{ flex: 1}}>
                    <h4>{item.name}</h4>
                    <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
                    {item.quantity > 3 && <p style={{ color: 'green'}}>10% discount applied!</p>}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <span style={{ margin: '0 10px'}}>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <p><strong>Total:</strong> ${itemTotal.toFixed(2)}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ marginLeft: '10px'}}>
                    Remove
                </button>
            </div>
        </li>
    );
};

export default CartItem;
