import { useEffect, useState } from "react";
import { fetchProducts } from "./api-mock/products-api";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  // const [products, setProducts] = useState([]);
  //
  // useEffect(() => {
  //   fetchProducts().then((products) => {
  //     console.log("Fetched the products", products);
  //     setProducts(products);
  //   });
  // });
  //
  // return (
  //   <div>
  //     <h1>Hello! Here are the available products:</h1>
  //     <ul>
  //       {products.map((product) => (
  //         <li key={product.id}>
  //           <div>
  //             <p>
  //               {product.name} ( price: ${product.price})
  //             </p>
  //             <img src={`images/${product.image}`} width="200px" />
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
    return (
        <div className='app-container'>
            <div className='product-list'>
                <ProductList />
            </div>
            <div className='shopping-cart'>
                <ShoppingCart />
            </div>
        </div>
    )
};

export default App;
