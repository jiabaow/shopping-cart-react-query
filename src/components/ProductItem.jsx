import React from 'react';
import { useShoppingCart } from "../ShoppingCartContext";

const ProductItem = ({ product }) => {
    const { addToCart } = useShoppingCart();

    return (
        < li style={{ marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center'}}>
                <img src={`images/${product.image}`} alt={product.name} width='100px' style={{ marginRight: '20px'}}/>
                <div style={{ flex: 1 }}>
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            </div>
        </li>
    );
};

export default ProductItem;
